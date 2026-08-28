# Project Active Knowledge Bank (Memory)

> 🤖 CATATAN UNTUK AI: File ini dikelola secara OTOMATIS oleh AI. Update file ini di akhir setiap sesi penyelesaian fitur.

## 🧠 Current Project State
- **Status**: Adaptive spec-driven boilerplate initialized and consistency-hardened.
- **Active Sprint/Goal**: Ready for staged product intake, explicit stack/profile selection, and product-aware frontend design.

## 📐 Architecture Decision Records (ADR)
- **ADR-001**: Menggunakan Hono.js dibanding Express karena Type-Safety RPC & performa Edge.
- **ADR-002**: Menggunakan Drizzle ORM dibanding Prisma untuk zero-overhead SQL performance.
- **ADR-003**: Menetapkan Mandatory Automated Testing Rule (Unit, Integration Vitest & E2E Playwright) dengan threshold coverage minimal **≥ 80%** (global/services) dan **≥ 90%** (critical/auth/payment modules), serta melengkapi skill `skill-automated-testing`.
- **ADR-004**: Mengadopsi **Spec-Driven Multi-Agent Workflow (SDD)** dengan direktori `.ai/` (`specs/features/`, `plans/`, `tasks/`, `decisions/`, `project-state.md`), batasan peran ketat (*strict boundaries* untuk PM, Architect, Engineers, QA), serta *Dependency-First Task Breakdown* untuk mencegah konflik antar modul.
- **ADR-005**: Boilerplate tetap adaptif; pilihan coupled/decoupled, runtime/package manager, database, dan source roots di-resolve dari project state/feature plan -> Accepted ADR -> `MEMORY.md` -> default `STACK.md`, lalu digunakan konsisten oleh seluruh agent dan skill.
- **ADR-006**: Mengadopsi lifecycle product/design bertahap: prompt awal -> AI-drafted PRD -> human approval -> architecture/plan -> human approval -> project-specific `PRODUCT.md` -> approved visual direction -> implementation/finish review -> durable `DESIGN.md`. Impeccable menjadi default design authority, Taste dibatasi untuk landing/marketing/portfolio art direction, dan Emil dibatasi untuk motion/interaction.

## 🐛 Known Issues & Technical Debts
- Third-party design skills are generated project-locally from `.ai/agent-skills.lock.json`; pinned revisions are updated intentionally and generated directories remain uncommitted. Routing policy stays owned by root instructions and `skill-ui-design-system`.

## 🎯 Next Immediate Steps
- [ ] Ingest first project request and record the selected profile in an Accepted ADR and `.ai/project-state.md` before implementation.
- [ ] Generate `PRODUCT.md` only during the first real product intake; do not add generic product/design context to the meta-boilerplate.
