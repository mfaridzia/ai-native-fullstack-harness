# Spec-Driven Development (SDD) Multi-Agent Workflow

Dokumen ini adalah panduan standar alur pengembangan software berbasis AI Agent di repositori ini.

---

## 🧭 Pipeline Alur Kerja Penuh (Feature Development)

```text
1. User Idea / Feature Request
             ↓
2. Product Intake [03-product-manager]
   Explore repo + ask material gaps + draft `.ai/specs/features/[feature].md`
             ↓
3. HUMAN GATE: PRD Approval
   Approve users, scope, constraints, acceptance criteria, out-of-scope
             ↓
4. Architecture Intake [04-systems-architect]
   Resolve profile + ADR + `.ai/plans/[feature]-plan.md` + `.ai/tasks/[feature]-tasks.md`
             ↓
5. HUMAN GATE: Architecture & Plan Approval
   Approve runtime, package manager, database, roots, contracts, and task order
             ↓
6. Product & Design Context (when frontend is in scope)
   Impeccable init -> `PRODUCT.md`; classify surface and prepare direction
             ↓
7. HUMAN GATE: Visual Direction Approval (new/replacement visual world only)
   Product UI: Impeccable | Marketing: Taste art direction | Motion: Emil specialist
             ↓
8. [08-db / 05-be / 06-fe] -> Implement 1-3 dependency-ordered tasks + tests
             ↓
9. Finish Review
   Impeccable critique/audit/polish + motion review when applicable + record `DESIGN.md`
             ↓
10. [09-qa-security-auditor] -> Diff audit + OWASP; may write only `e2e/**`
             ↓
11. Human Verification -> Confirm render, behavior, and Acceptance Criteria
             ↓
12. Sync State & Memory -> Update `.ai/project-state.md` & `MEMORY.md`
```

## 🧭 Intake, Context, and Design Artifact Ownership

- The first prompt starts intake. It does not bypass approval gates or authorize production code.
- The PM may infer from repository evidence, but must confirm material assumptions before marking a PRD Approved.
- `PRODUCT.md` is created per initialized product project, after PRD approval and before new visual work. It contains durable product truth, not feature scope or visual recipes.
- Feature PRDs remain the source of truth for feature-specific behavior and acceptance criteria.
- `DESIGN.md` is created per initialized product project:
  - Existing coherent UI: document the incumbent system before substantial new design work.
  - Greenfield/new visual world: create it during finish review from the approved, implemented surface.
  - Local feature extension: inherit the established system; update `DESIGN.md` only for an approved durable system change.
- Do not ship generic placeholder `PRODUCT.md` or `DESIGN.md` files in this meta-boilerplate.

## 🎨 Frontend Surface Routing

| Surface mode | Examples | Visual authority | Specialist |
| :--- | :--- | :--- | :--- |
| **Operate** | Dashboard, app, admin, settings, forms, tables | Impeccable only | Emil for justified motion |
| **Persuade** | Landing, pricing, campaign, public marketing | Taste art direction within Impeccable context/quality gates | Emil for justified motion |
| **Read** | Docs, articles, guides, help | Impeccable | Taste only when explicitly approved |
| **Experience** | Portfolio, gallery, showcase | Taste art direction within Impeccable context/quality gates | Emil for justified motion |

Never apply Taste to dense product UI. Never let Emil change the approved visual system. Never let two skills act as competing design authorities.

For Persuade/Experience marketing work, use exactly one direction round: Impeccable establishes missing product context, Taste proposes the art direction, the human approves it, and Impeccable later treats it as pinned input for finish review. Do not ask Impeccable to generate a second visual world. When Emil is installed, it is the motion authority; Impeccable audits motion only as part of overall UI quality.

---

## 🎯 Task Complexity Tiers (Kapan Butuh Docs?)

Untuk menjaga efisiensi agar tidak birokratis pada hal-hal kecil:

| Tier | Tipe Perubahan | Contoh | Alur Kerja |
| :--- | :--- | :--- | :--- |
| **Tier 1 (Tweak / Hotfix)** | Perubahan kosmetik/kecil | Ganti warna button, typo, fix 1 baris bug | Langsung koding oleh Engineer -> Run Test -> Selesai. |
| **Tier 2 (Medium Feature)** | 1 modul / 1 endpoint CRUD | Endpoint update profile, filter tabel | Plan singkat oleh Architect -> Code -> Test. |
| **Tier 3 (Complex / Core)** | Sistem multi-layer / arsitektur | Auth RBAC, Multitenancy, Payment Gateway | **Wajib Full SDD** dengan human approval setelah PRD dan setelah plan/tasks. |

## 🧩 Active Project Profile Resolution

Boilerplate ini sengaja mendukung beberapa arsitektur dan runtime. Sebelum membuat plan atau menjalankan command, resolve pilihan dengan urutan:

1. `.ai/project-state.md` dan feature plan aktif.
2. ADR berstatus **Accepted** di `.ai/decisions/`.
3. Ringkasan keputusan di `MEMORY.md`.
4. Default selection rules di `STACK.md` hanya jika belum ada keputusan yang lebih spesifik.

Jika pilihan architecture, runtime, package manager, database, atau source roots masih belum tersedia dan memengaruhi implementasi, selesaikan pada project intake dan catat sebagai ADR. Jangan menebak atau mencampur profile.

---

## 🧱 Dependency-Ordered Task Breakdown (Anti-Bentrok)

Setiap pengerjaan fitur wajib dipecah berurutan berdasarkan **Hierarki Dependensi**:

```
Layer 0: Database & Migrations (08-database-specialist)
   ↓
Layer 1: Contract Design (04-systems-architect) -> Production Schema (05-backend-engineer / 07-fullstack)
   ↓
Layer 2: Backend Logic & Unit Tests (05-backend-engineer)
   ↓
Layer 3: Frontend Data Client & State (06-frontend-engineer / 07-fullstack)
   ↓
Layer 4: Approved Frontend Direction, UI, Forms & Interactions (01-ui-ux / 06-frontend)
   ↓
Layer 5: Design Finish Review + QA, Security Diff Audit & E2E Tests
```

---

## 🛡️ Strict Role Boundaries (Mencegah Role Bleeding)

- **PM (03)**: Fokus ke requirement bisnis, in/out scope, acceptance criteria. **Dilarang menulis kode.**
- **Architect (04)**: Fokus ke ERD, kontrak Zod/API, dan urutan dependensi. **Dilarang menulis kode produksi.**
- **Database (08)**: Fokus ke Drizzle schema, migration, indexing.
- **Backend (05)**: Fokus ke Hono.js routes, service logic, Vitest tests.
- **Frontend (06)**: Fokus ke React, TanStack, UI Tailwind, form states.
- **Fullstack (07)**: Khusus fitur yang terintegrasi erat antar FE-BE.
- **QA/Security (09)**: Review diff terhadap spec dan OWASP. Tidak boleh mengubah implementation code; hanya boleh menulis `e2e/**`.

## ✅ Definition of Done

Task selesai hanya jika scope dan acceptance criteria terpenuhi, perubahan tidak melebar, serta seluruh script relevan untuk profile aktif lulus: lint, typecheck, unit/integration coverage, E2E, dan build. Agent harus melaporkan command yang dijalankan, hasilnya, file yang berubah, serta risiko atau pekerjaan tersisa.

---

## 📁 Struktur Artefak `.ai/`
- `.ai/specs/features/` : Tempat PRD / Feature Specification.
- `.ai/plans/` : Tempat rancangan teknis & arsitektur.
- `.ai/tasks/` : Tempat breakdown tugas berurutan.
- `.ai/decisions/` : Tempat ADR (Architecture Decision Records) jika ada keputusan besar.
- `.ai/project-state.md` : Status sprint/task aktif real-time.
- `MEMORY.md` : Memori permanen lintas sesi.

---

## 🌿 Git Commit Conventions
Format commit message: `<type>(<scope>): <short summary>`
- `feat`: Fitur baru sesuai spec
- `fix`: Perbaikan bug
- `docs`: Perubahan dokumentasi / PRD / Plan
- `refactor`: Perubahan struktur kode tanpa mengubah fungsionalitas
- `test`: Menambah atau memperbaiki tes
