# Spec-Driven Development (SDD) Multi-Agent Workflow

Dokumen ini adalah panduan standar alur pengembangan software berbasis AI Agent di repositori ini.

---

## 🧭 Pipeline Alur Kerja Penuh (Feature Development)

```text
1. User Idea / Feature Request
             ↓
2. [03-product-manager]   → Menghasilkan PRD di `.ai/specs/features/[feature].md`
             ↓
3. Human Spec Approval     → Scope, acceptance criteria, dan constraint disetujui
             ↓
4. [04-systems-architect] → Menghasilkan Tech Plan di `.ai/plans/[feature]-plan.md` (NO CODE)
             ↓
5. Task Decomposition     → Menghasilkan `.ai/tasks/[feature]-tasks.md` (Dependency-Ordered)
             ↓
6. Human Plan Approval    → Profile, kontrak, task order, dan checkpoint disetujui
             ↓
7. [08-db / 05-be / 06-fe]→ Implementasi 1-3 task per batch + tests
             ↓
8. [09-qa-security-auditor]→ Audit diff + OWASP; hanya boleh menulis `e2e/**`
             ↓
9. Human Verification    → Konfirmasi hasil & Acceptance Criteria
             ↓
10. Sync State & Memory  → Update `.ai/project-state.md` & `MEMORY.md`
```

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
Layer 4: Frontend UI, Forms & Interactions (06-frontend-engineer)
   ↓
Layer 5: QA, Security Diff Audit & E2E Tests (09-qa-security-auditor)
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
