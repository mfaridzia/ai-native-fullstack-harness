# 🚀 AI-Native Fullstack Engineering Harness
### *Universal Spec-Driven Multi-Agent Framework & Meta-Boilerplate*

> **Enterprise-Grade AI Governance & Architecture Harness for Google Antigravity CLI, Claude Code CLI, & OpenAI Codex**

![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-blue.svg)
![Hono.js](https://img.shields.io/badge/Hono.js-Ultra_Fast-orange.svg)
![Drizzle ORM](https://img.shields.io/badge/Drizzle_ORM-100%25_Type_Safe-green.svg)
![Google Antigravity](https://img.shields.io/badge/Google_Antigravity-Compatible-4285F4.svg)
![Claude Code](https://img.shields.io/badge/Claude_Code-Compatible-D97706.svg)
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
| **Kualitas Kode AI** | *Vibe coding* tanpa arah, rentan halusinasi & regresi. | **Spec-Driven**: Wajib PRD $ightarrow$ Tech Plan $ightarrow$ Dependency Tasks $ightarrow$ Automated Tests $\ge 80\%$. |
| **Kolaborasi AI** | 1 AI serabutan mengerjakan segalanya. | **12 Subagent Spesialis** dengan batasan peran ketat (*strict boundaries*). |

---

## 🧭 Spec-Driven Development (SDD) Lifecycle

Setiap fitur yang Anda minta akan diproses melalui alur terstandarisasi:

```text
1. User Idea / Feature Request
             ↓
2. [03-product-manager]   → Menghasilkan PRD di `.ai/specs/features/[feature].md`
             ↓
3. Human Spec Approval     → Verifikasi Scope (In/Out of scope) & Acceptance Criteria
             ↓
4. [04-systems-architect] → Menghasilkan Tech Plan di `.ai/plans/[feature]-plan.md` (NO CODE)
             ↓
5. Task Decomposition     → Menghasilkan `.ai/tasks/[feature]-tasks.md` (Dependency-Ordered)
             ↓
6. Human Plan Approval    → Verifikasi Kontrak Zod/API & Urutan Task
             ↓
7. [08-db / 05-be / 06-fe]→ Implementasi per batch (1-3 task) + Unit/Component Tests (>=80%)
             ↓
8. [09-qa-security-auditor]→ Audit diff vs PRD + OWASP Check + Playwright E2E (`e2e/**`)
             ↓
9. Human Verification    → Konfirmasi hasil & Acceptance Criteria terpenuhi
             ↓
10. Sync State & Memory  → Update `.ai/project-state.md` & `MEMORY.md`
```

---

## 📂 Directory Blueprint

```text
my-project/
├── .agents/                           # 🚀 Google Antigravity Native Directory
│   ├── agents/                        # 12 Subagent Roles (.agents/agents/<name>.md)
│   └── skills/                        # 12 Procedural Skills (.agents/skills/<folder>/SKILL.md)
├── .claude/                           # 🚀 Claude Code Native Directory (Symlinked)
│   ├── agents -> ../.agents/agents    
│   └── skills -> ../.agents/skills    
├── .ai/                               # 📁 Spec-Driven Development (SDD) Artifacts
│   ├── specs/features/                # PRD & Feature Specifications
│   ├── plans/                         # Technical Architecture & API Plans
│   ├── tasks/                         # Dependency-Ordered Task Matrix
│   ├── decisions/                     # Architecture Decision Records (ADRs)
│   └── project-state.md               # Real-time Short-term Sprint Tracker
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
| `01-ui-ux-designer` | Merancang visual design system, token warna HSL/OKLCH, Tailwind utility patterns. | UI Design Tokens & Components |
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

### 3. Lempar Ide Fitur Pertama Anda
Cukup berikan ide bisnis Anda ke AI Utama (Orchestrator):
> *"Saya mau membuat MVP SaaS Point of Sale (POS) untuk kedai kopi. Di tahap awal ini, saya butuh fitur Kasir: memilih menu katalog, memilih varian/add-on, kalkulasi pajak, dan bayar QRIS. Tolong proses fitur ini lewat Spec-Driven Development."*

AI akan secara otomatis:
1. Memanggil **PM** $ightarrow$ Membuat PRD di `.ai/specs/features/pos-cashier.md`.
2. Memanggil **Architect** $ightarrow$ Merancang DB/API di `.ai/plans/pos-cashier-plan.md` & task di `.ai/tasks/pos-cashier-tasks.md`.
3. Menunggu approval Anda $ightarrow$ Mengeksekusi kode secara bertahap (DB $ightarrow$ BE $ightarrow$ FE $ightarrow$ QA).
4. Menjalankan seluruh test suite dan memperbarui `MEMORY.md`.

---

## 🛑 Git Strategy (Inclusions vs Exclusions)

- **✅ Di-commit ke GitHub**: `.agents/`, `.claude/`, `.ai/`, `AGENTS.md`, `CLAUDE.md`, `CODING_RULES.md`, `ARCHITECTURE.md`, `STACK.md`, `MEMORY.md`, dan lockfile package manager aktif.
- **❌ Dilarang Commit (`.gitignore`)**: `.env` (Secrets), `scratch/` (Temporary experiments), `node_modules/`, `dist/`.

---

## 📄 License

Didistribusikan di bawah lisensi **MIT License**. Lihat [`LICENSE`](file:///Users/muhfaridzia/Documents/personal/ai-fullstack-boilerplate/LICENSE) untuk informasi lebih lanjut. Bebas digunakan untuk proyek personal maupun komersial!
