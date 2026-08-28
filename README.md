# 🚀 AI-Native Fullstack Engineering Harness

### *Universal Spec-Driven Multi-Agent Framework & Meta-Boilerplate*

> **Enterprise-Grade AI Governance & Architecture Harness for Google Antigravity CLI, Claude Code CLI, & OpenAI Codex**

![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-blue.svg)
![Hono.js](https://img.shields.io/badge/Hono.js-Ultra_Fast-orange.svg)
![Drizzle ORM](https://img.shields.io/badge/Drizzle_ORM-100%25_Type_Safe-green.svg)
![Google Antigravity](https://img.shields.io/badge/Google_Antigravity-Compatible-4285F4.svg)
![Claude Code](https://img.shields.io/badge/Claude_Code-Compatible-D97706.svg)
![OpenAI Codex](https://img.shields.io/badge/OpenAI_Codex-Compatible-00A67E.svg)
![Spec-Driven Development](https://img.shields.io/badge/SDD-Spec--Driven_Development-success.svg)
![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)

---

## 💡 What Is This Repository?

This repository is **not merely a conventional code boilerplate** containing rigid static templates. It is an **Adaptive AI Engineering Harness & Meta-Boilerplate**.

It provides the **reasoning system, governance, and delivery pipeline** that enables AI coding assistants such as Antigravity, Claude Code, Codex, and Cursor to operate as a structured, secure, and disciplined professional software engineering team.

### ⚖️ Why Use This Harness Instead of a Traditional Boilerplate?

| Aspect | Traditional Boilerplate | AI-Native Engineering Harness |
| :--- | :--- | :--- |
| **Form** | Preinstalled static code templates. | A governance system with strict guardrails, specialist subagents, and an SDD pipeline. |
| **Stack flexibility** | Rigid and locked to one framework from the beginning. | **Adaptive**: produces a Decoupled architecture (Vite + Hono) or Unified architecture (Next.js), using Bun or Node.js according to project intake. |
| **AI code quality** | Directionless vibe coding that is prone to hallucinations and regressions. | **Spec-Driven**: requires PRD → approval → architecture/plan → approval → product/design context → implementation → verification. |
| **AI collaboration** | One general-purpose AI handles everything. | **12 specialist subagents** with strict role boundaries. |

---

## 🧭 Spec-Driven Development (SDD) Lifecycle

Every requested feature follows a standardized delivery lifecycle:

```text
1. User Idea / Feature Request
             ↓
2. [03-product-manager]   → Product intake + draft PRD in `.ai/specs/features/[feature].md`
             ↓
3. Human PRD Approval      → Verify users, scope, constraints, and acceptance criteria
             ↓
4. [04-systems-architect] → Resolve profile + ADR + plan + dependency tasks (NO CODE)
             ↓
5. Human Plan Approval     → Verify the stack, contracts, source roots, and task order
             ↓
6. Product/Design Context  → Impeccable `init` creates a project-specific `PRODUCT.md`
             ↓
7. Human Visual Approval   → Required for a new or replacement visual world
             ↓
8. [08-db / 05-be / 06-fe]→ Batch implementation + Unit/Component Tests (>=80%)
             ↓
9. Design Finish Review   → Render audit/polish, motion review, durable `DESIGN.md`
             ↓
10. QA & Security         → Diff vs PRD + OWASP + Playwright E2E
             ↓
11. Human Verification    → Confirm the result and verify all Acceptance Criteria
             ↓
12. Sync State & Memory   → Update `.ai/project-state.md` & `MEMORY.md`
```

### Frontend Design Routing

| Surface | Design authority | Motion |
| :--- | :--- | :--- |
| Product UI, dashboard, admin, forms, settings | Impeccable | Emil skills when justified |
| Landing, campaign, public marketing, portfolio | Taste for art direction; Impeccable for context and quality gates | Emil skills when justified |
| Docs, articles, guides | Impeccable by default | Emil skills when justified |

The meta-boilerplate intentionally does not contain generic `PRODUCT.md` or `DESIGN.md`. Each real product creates `PRODUCT.md` after approved intake. Existing products document their incumbent visual system; greenfield products create `DESIGN.md` from the approved implemented world during finish review.

---

## 📂 Directory Blueprint

```text
my-project/
├── .agents/                           # 🚀 Google Antigravity Native Directory
│   ├── agents/                        # 12 Subagent Roles (.agents/agents/<name>.md)
│   └── skills/                        # Committed local skills + generated third-party skills
├── .claude/                           # 🚀 Claude Code Native Directory (Symlinked)
│   ├── agents -> ../.agents/agents    
│   └── skills -> ../.agents/skills    
├── .ai/                               # 📁 Spec-Driven Development (SDD) Artifacts
│   ├── specs/features/                # PRD & Feature Specifications
│   ├── plans/                         # Technical Architecture & API Plans
│   ├── tasks/                         # Dependency-Ordered Task Matrix
│   ├── decisions/                     # Architecture Decision Records (ADRs)
│   └── project-state.md               # Real-time Short-term Sprint Tracker
├── scripts/
│   └── setup-agent-skills.mjs          # Installs pinned third-party skills after clone
├── AGENTS.md                          # Universal Agent Instructions & Routing (Antigravity)
├── CLAUDE.md                          # Universal Agent Instructions & Routing (Claude Code)
├── ARCHITECTURE.md                    # System Architecture Patterns & Data Flow
├── STACK.md                           # Supported Stack Specifications & Selection Rules
├── CODING_RULES.md                    # Strict Rules (Zero any, OWASP Top 10, Coverage >=80%)
├── WORKFLOW.md                        # SDD Pipeline, Task Tiers & Definition of Done
├── MEMORY.md                          # Persistent Long-term Knowledge Bank (Auto-Managed)
├── .gitignore                         # Production Git Ignore Rules
└── scratch/                           # 🧪 Isolated Sandbox for AI Experiments (Git-Ignored)
```

---

## 🤖 The 12 Specialist Subagents

| Subagent | Role & Strict Boundaries | Primary Output |
| :--- | :--- | :--- |
| `01-ui-ux-designer` | Product-aware visual direction and design systems following Impeccable/Taste routing. | Approved UI Direction & Design Context |
| `02-code-reviewer` | Audits strict type safety, memory leaks, and architecture (*Review Only*). | Code Audit Report |
| `03-product-manager` | Translates business needs into a technical PRD (**No code changes**). | `.ai/specs/features/*.md` |
| `04-systems-architect` | Designs the database ERD, Zod contracts, and task matrix (**No production code**). | `.ai/plans/*.md` & `.ai/tasks/*.md` |
| `05-backend-engineer` | Implements Hono.js routes, service layers, and Vitest unit tests ($\ge 80\%$). | Backend Code & Tests |
| `06-frontend-engineer` | Implements React, TanStack, Tailwind UI, and Vitest component tests ($\ge 80\%$). | Frontend Code & Tests |
| `07-fullstack-engineer` | Integrates the Hono RPC client across layers for tightly coupled features. | Fullstack Integration |
| `08-database-specialist` | Owns Drizzle ORM schemas, Drizzle Kit migrations, indexing, and SQL optimization. | DB Schema & Migrations |
| `09-qa-security-auditor` | Audits OWASP Top 10 risks and PRD compliance, and writes Playwright E2E tests (*may only write to `e2e/**`*). | E2E Tests & Security Sign-off |
| `10-seo-specialist` | Configures dynamic meta tags, OpenGraph, canonical URLs, and JSON-LD. | SEO Schemas |
| `11-a11y-specialist` | Verifies WCAG 2.1 AA accessibility compliance and ARIA attributes. | A11y Audit & Fixes |
| `12-devops-engineer` | Creates multi-stage Dockerfiles, GitHub Actions CI/CD pipelines, and deployment profiles. | CI/CD & Deploy Config |

---

## 🚀 Start a New Project

### 1. Clone the Repository

```bash
git clone https://github.com/mfaridzia/ai-native-fullstack-harness.git my-awesome-app
cd my-awesome-app
rm -rf .git && git init
node scripts/setup-agent-skills.mjs
```

Third-party design skills are installed into `.agents/skills/` but are not committed. Their exact repository paths and commit SHAs are pinned in `.ai/agent-skills.lock.json`. Verify an existing installation with:

```bash
node scripts/setup-agent-skills.mjs --check
```

After intentionally changing a pinned revision, replace only manifest-managed generated skill directories with:

```bash
node scripts/setup-agent-skills.mjs --force
```

### 2. Open It with an AI Coding CLI

* **Google Antigravity**:
  ```bash
  agy
  ```
* **Claude Code**:
  ```bash
  claude
  ```
* **OpenAI Codex**:
  ```bash
  codex
  ```


### 3. Submit Your First Feature Idea

Give your business idea to the primary AI orchestrator:

> *"I want to build a Point of Sale (POS) SaaS MVP for coffee shops. The first release needs a cashier flow for selecting catalog items, choosing variants and add-ons, calculating tax, and accepting QRIS payments. Process this feature through Spec-Driven Development."*

The AI will then:

1. Invoke the **Product Manager** to resolve material gaps and draft `.ai/specs/features/pos-cashier.md`.
2. Wait for your PRD approval.
3. Invoke the **Architect** to resolve the project profile and design the database, API, plan, and tasks.
4. Wait for your architecture and plan approval.
5. Create `PRODUCT.md` from confirmed facts and prepare a visual direction when frontend work is in scope.
6. Wait for your visual-direction choice when creating a new visual world.
7. Implement in dependency order (DB → BE → FE → design finish review → QA), run the test suite, and update project state and memory.

---

## 🛑 Git Strategy (Inclusions vs Exclusions)

- **✅ Commit to GitHub**: project-owned agent/router skills, `.claude/`, `.ai/agent-skills.lock.json`, governance documents, the setup script, and the active package-manager lockfile.
- **❌ Do not commit (`.gitignore`)**: generated third-party skills, `.env` secrets, `scratch/` experiments, `node_modules/`, or build output.

---

## 📄 License

Distributed under the **MIT License**. See [`LICENSE`](LICENSE) for details. Free for personal and commercial use.
