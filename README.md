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

## 💡 Apa Sebenarnya Repositori Ini?

Repositori ini **bukan sekadar code boilerplate biasa** (yang berisi template kode statis kaku), melainkan sebuah **Adaptive AI Engineering Harness & Meta-Boilerplate**.

Repositori ini adalah **"Sistem Otak, Tata Kelola & Pabrik"** bagi AI Coding Assistant (Antigravity, Claude Code, Codex, Cursor) agar mampu bekerja sebagai **Tim Software Engineer Profesional** yang terstruktur, aman, dan disiplin tinggi.

### ⚖️ Mengapa Harness Ini Lebih Unggul dibanding Traditional Boilerplate?

| Aspek | Traditional Boilerplate | AI-Native Engineering Harness |
| :--- | :--- | :--- |
| **Bentuk** | Template kode statis yang sudah terinstall. | Sistem tata kelola, aturan ketat (*guardrails*), subagents, dan pipeline SDD. |
| **Fleksibilitas Stack** | Kaku (terkunci pada 1 framework sejak awal). | **Adaptif**: Menghasilkan arsitektur Decoupled (Vite + Hono) atau Unified (Next.js), Bun atau Node.js sesuai intake proyek. |
| **Kualitas Kode AI** | *Vibe coding* tanpa arah, rentan halusinasi & regresi. | **Spec-Driven**: Wajib PRD → approval → architecture/plan → approval → product/design context → implementation → verification. |
| **Kolaborasi AI** | 1 AI serabutan mengerjakan segalanya. | **12 Subagent Spesialis** dengan batasan peran ketat (*strict boundaries*). |

---

## 🧭 Spec-Driven Development (SDD) Lifecycle

Setiap fitur yang Anda minta akan diproses melalui alur terstandarisasi:

```text
1. User Idea / Feature Request
             ↓
2. [03-product-manager]   → Product intake + draft PRD di `.ai/specs/features/[feature].md`
             ↓
3. Human PRD Approval      → Verifikasi user, scope, constraint, dan acceptance criteria
             ↓
4. [04-systems-architect] → Resolve profile + ADR + plan + dependency tasks (NO CODE)
             ↓
5. Human Plan Approval     → Verifikasi stack, kontrak, source roots, dan task order
             ↓
6. Product/Design Context  → Impeccable `init` membuat `PRODUCT.md` per project
             ↓
7. Human Visual Approval   → Wajib untuk visual world baru/replacement
             ↓
8. [08-db / 05-be / 06-fe]→ Implementasi per batch + Unit/Component Tests (>=80%)
             ↓
9. Design Finish Review   → Render audit/polish, motion review, durable `DESIGN.md`
             ↓
10. QA & Security         → Diff vs PRD + OWASP + Playwright E2E
             ↓
11. Human Verification    → Konfirmasi hasil & Acceptance Criteria terpenuhi
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

## 🤖 Tim 12 Master Subagents

| Subagent | Role & Strict Boundaries | Output Utama |
| :--- | :--- | :--- |
| `01-ui-ux-designer` | Product-aware visual direction and design systems following Impeccable/Taste routing. | Approved UI Direction & Design Context |
| `02-code-reviewer` | Audit strict type-safety, memory leaks, dan arsitektur (*Review Only*). | Code Audit Report |
| `03-product-manager` | Menerjemahkan kebutuhan bisnis ke Technical PRD (**Dilarang menulis kode**). | `.ai/specs/features/*.md` |
| `04-systems-architect` | Merancang DB ERD, Zod Contracts, dan Task Matrix (**Dilarang menulis kode produksi**). | `.ai/plans/*.md` & `.ai/tasks/*.md` |
| `05-backend-engineer` | Implementasi Hono.js routes, service layer, dan Vitest unit tests ($\ge 80\%$). | Backend Code & Tests |
| `06-frontend-engineer` | Implementasi React, TanStack, Tailwind UI, dan Vitest component tests ($\ge 80\%$). | Frontend Code & Tests |
| `07-fullstack-engineer` | Integrasi Hono RPC Client antar-layer untuk fitur tightly coupled. | Fullstack Integration |
| `08-database-specialist` | Schema Drizzle ORM, Drizzle Kit migrations, indexing, dan optimasi SQL. | DB Schema & Migrations |
| `09-qa-security-auditor` | Audit OWASP Top 10, diff vs PRD, dan Playwright E2E (*Hanya menulis `e2e/**`*). | E2E Tests & Security Sign-off |
| `10-seo-specialist` | Konfigurasi Dynamic Meta Tags, OpenGraph, Canonical URLs, dan JSON-LD. | SEO Schemas |
| `11-a11y-specialist` | Verifikasi kepatuhan aksesibilitas WCAG 2.1 AA & ARIA attributes. | A11y Audit & Fixes |
| `12-devops-engineer` | Multi-stage Dockerfile, GitHub Actions CI/CD pipeline, dan deployment profiles. | CI/CD & Deploy Config |

---

## 🚀 Cara Menggunakan untuk Proyek Baru

### 1. Clone Repositori
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

### 2. Buka dengan AI Coding CLI
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


### 3. Lempar Ide Fitur Pertama Anda
Cukup berikan ide bisnis Anda ke AI Utama (Orchestrator):
> *"Saya mau membuat MVP SaaS Point of Sale (POS) untuk kedai kopi. Di tahap awal ini, saya butuh fitur Kasir: memilih menu katalog, memilih varian/add-on, kalkulasi pajak, dan bayar QRIS. Tolong proses fitur ini lewat Spec-Driven Development."*

AI akan secara otomatis:
1. Memanggil **PM** → Menggali gap material dan membuat draft PRD di `.ai/specs/features/pos-cashier.md`.
2. Menunggu approval PRD Anda.
3. Memanggil **Architect** → Resolve profile, merancang DB/API, plan, dan tasks.
4. Menunggu approval arsitektur/plan Anda.
5. Membuat `PRODUCT.md` dari fakta yang dikonfirmasi dan menyiapkan visual direction bila frontend termasuk scope.
6. Menunggu pilihan visual Anda bila membuat visual world baru.
7. Mengeksekusi kode secara bertahap (DB → BE → FE → design finish review → QA), menjalankan test suite, dan memperbarui state/memory.

---

## 🛑 Git Strategy (Inclusions vs Exclusions)

- **✅ Di-commit ke GitHub**: agent/router skills milik project, `.claude/`, `.ai/agent-skills.lock.json`, governance docs, setup script, dan lockfile package manager aktif.
- **❌ Dilarang Commit (`.gitignore`)**: generated third-party skills, `.env` (Secrets), `scratch/` (temporary experiments), `node_modules/`, dan build output.

---

## 📄 License

Didistribusikan di bawah lisensi **MIT License**. Lihat [`LICENSE`](file:///Users/muhfaridzia/Documents/personal/ai-fullstack-boilerplate/LICENSE) untuk informasi lebih lanjut. Bebas digunakan untuk proyek personal maupun komersial!
