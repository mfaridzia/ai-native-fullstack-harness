#!/usr/bin/env node

import { spawnSync } from "node:child_process";
import { existsSync } from "node:fs";
import {
  cp,
  mkdir,
  mkdtemp,
  readFile,
  readdir,
  rm,
  writeFile,
} from "node:fs/promises";
import { tmpdir } from "node:os";
import { dirname, isAbsolute, join, relative, resolve, sep } from "node:path";
import { fileURLToPath } from "node:url";

const scriptDirectory = dirname(fileURLToPath(import.meta.url));
const projectRoot = resolve(scriptDirectory, "..");
const manifestPath = join(projectRoot, ".ai", "agent-skills.lock.json");
const force = process.argv.includes("--force");
const checkOnly = process.argv.includes("--check");
const supportedArguments = new Set(["--force", "--check"]);

for (const argument of process.argv.slice(2)) {
  if (!supportedArguments.has(argument)) {
    throw new Error(`Unknown argument: ${argument}`);
  }
}

if (force && checkOnly) {
  throw new Error("Use either --force or --check, not both.");
}

const manifest = JSON.parse(await readFile(manifestPath, "utf8"));
validateManifest(manifest);

const generatedRoot = resolve(projectRoot, manifest.generatedRoot);
assertInsideProject(generatedRoot, "generatedRoot");
const statePath = join(generatedRoot, ".vendor-state.json");
const expectedState = {
  schemaVersion: manifest.schemaVersion,
  skills: manifest.skills.map(({ name, repo, ref, path }) => ({
    name,
    repo,
    ref,
    path,
  })),
};

await mkdir(generatedRoot, { recursive: true });

const installedState = await readJsonIfPresent(statePath);
const stateMatches =
  installedState !== null &&
  JSON.stringify(installedState) === JSON.stringify(expectedState);
const missingSkills = manifest.skills.filter(
  ({ name }) => !existsSync(join(generatedRoot, name, "SKILL.md")),
);

if (checkOnly) {
  if (!stateMatches || missingSkills.length > 0) {
    const missing = missingSkills.map(({ name }) => name).join(", ") || "none";
    throw new Error(
      `Agent skills are not synchronized. Missing: ${missing}. Run node scripts/setup-agent-skills.mjs${installedState ? " --force" : ""}.`,
    );
  }

  console.log(`Agent skills are synchronized (${manifest.skills.length} skills).`);
  process.exit(0);
}

if (stateMatches && missingSkills.length === 0 && !force) {
  console.log(`Agent skills are already synchronized (${manifest.skills.length} skills).`);
  process.exit(0);
}

const existingManagedDirectories = manifest.skills.filter(({ name }) =>
  existsSync(join(generatedRoot, name)),
);

if ((installedState !== null || existingManagedDirectories.length > 0) && !force) {
  throw new Error(
    "Generated skill state differs from the lock manifest. Re-run with --force to replace only manifest-managed skill directories.",
  );
}

const temporaryRoot = await mkdtemp(join(tmpdir(), "agent-skills-"));

try {
  const repositories = groupByRepository(manifest.skills);

  for (const [key, skills] of repositories) {
    const { repo, ref } = skills[0];
    const archivePath = join(temporaryRoot, `${safeName(key)}.tar.gz`);
    const extractPath = join(temporaryRoot, safeName(key));
    await mkdir(extractPath, { recursive: true });

    console.log(`Downloading ${repo}@${ref.slice(0, 12)}...`);
    await downloadArchive(repo, ref, archivePath);
    extractArchive(archivePath, extractPath);

    const archiveEntries = await readdir(extractPath, { withFileTypes: true });
    const roots = archiveEntries.filter((entry) => entry.isDirectory());
    if (roots.length !== 1) {
      throw new Error(`Unexpected archive layout for ${repo}@${ref}.`);
    }

    const archiveRoot = join(extractPath, roots[0].name);

    for (const skill of skills) {
      const source = resolve(archiveRoot, skill.path);
      const sourceRelative = relative(archiveRoot, source);
      if (
        sourceRelative.startsWith(`..${sep}`) ||
        sourceRelative === ".." ||
        isAbsolute(sourceRelative)
      ) {
        throw new Error(`Unsafe skill source path: ${skill.path}`);
      }
      if (!existsSync(join(source, "SKILL.md"))) {
        throw new Error(`SKILL.md not found for ${skill.name} at ${skill.path}.`);
      }

      const destination = join(generatedRoot, skill.name);
      if (existsSync(destination)) {
        await rm(destination, { recursive: true, force: true });
      }
      await cp(source, destination, { recursive: true, errorOnExist: true });
      console.log(`Installed ${skill.name}.`);
    }
  }

  await writeFile(statePath, `${JSON.stringify(expectedState, null, 2)}\n`, "utf8");
  console.log(`Agent skills synchronized (${manifest.skills.length} skills).`);
} finally {
  await rm(temporaryRoot, { recursive: true, force: true });
}

function validateManifest(value) {
  if (
    typeof value !== "object" ||
    value === null ||
    value.schemaVersion !== 1 ||
    typeof value.generatedRoot !== "string" ||
    !Array.isArray(value.skills) ||
    value.skills.length === 0
  ) {
    throw new Error("Invalid agent skill lock manifest.");
  }

  const names = new Set();
  for (const skill of value.skills) {
    if (
      typeof skill !== "object" ||
      skill === null ||
      typeof skill.name !== "string" ||
      !/^[a-z0-9-]+$/.test(skill.name) ||
      typeof skill.repo !== "string" ||
      !/^[A-Za-z0-9_.-]+\/[A-Za-z0-9_.-]+$/.test(skill.repo) ||
      typeof skill.ref !== "string" ||
      !/^[a-f0-9]{40}$/.test(skill.ref) ||
      typeof skill.path !== "string" ||
      skill.path.length === 0 ||
      isAbsolute(skill.path) ||
      skill.path.split(/[\\/]/).includes("..")
    ) {
      throw new Error("Invalid skill entry in agent skill lock manifest.");
    }
    if (names.has(skill.name)) {
      throw new Error(`Duplicate skill name: ${skill.name}`);
    }
    names.add(skill.name);
  }
}

function assertInsideProject(target, label) {
  const targetRelative = relative(projectRoot, target);
  if (
    targetRelative.startsWith(`..${sep}`) ||
    targetRelative === ".." ||
    isAbsolute(targetRelative)
  ) {
    throw new Error(`${label} must resolve inside the project root.`);
  }
}

async function readJsonIfPresent(path) {
  try {
    return JSON.parse(await readFile(path, "utf8"));
  } catch (error) {
    if (error && typeof error === "object" && error.code === "ENOENT") {
      return null;
    }
    throw error;
  }
}

function groupByRepository(skills) {
  const groups = new Map();
  for (const skill of skills) {
    const key = `${skill.repo}@${skill.ref}`;
    const group = groups.get(key) ?? [];
    group.push(skill);
    groups.set(key, group);
  }
  return groups;
}

function safeName(value) {
  return value.replace(/[^A-Za-z0-9_.-]/g, "-");
}

async function downloadArchive(repo, ref, destination) {
  const url = `https://codeload.github.com/${repo}/tar.gz/${ref}`;
  const response = await fetch(url, { redirect: "follow" });
  if (!response.ok) {
    throw new Error(`Download failed for ${repo}@${ref}: HTTP ${response.status}`);
  }
  await writeFile(destination, Buffer.from(await response.arrayBuffer()));
}

function extractArchive(archive, destination) {
  const result = spawnSync("tar", ["-xzf", archive, "-C", destination], {
    encoding: "utf8",
  });
  if (result.error) {
    throw result.error;
  }
  if (result.status !== 0) {
    throw new Error(`tar failed: ${result.stderr.trim() || "unknown error"}`);
  }
}
