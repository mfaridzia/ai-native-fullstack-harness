# Project Active Knowledge Bank (Memory)

> 🤖 CATATAN UNTUK AI: File ini dikelola secara OTOMATIS oleh AI. Update file ini di akhir setiap sesi penyelesaian fitur.

## 🧠 Current Project State
- **Status**: Adaptive spec-driven boilerplate initialized and consistency-hardened.
- **Active Sprint/Goal**: Ready for project intake and explicit stack/profile selection.

## 📐 Architecture Decision Records (ADR)
- **ADR-001**: Menggunakan Hono.js dibanding Express karena Type-Safety RPC & performa Edge.
- **ADR-002**: Menggunakan Drizzle ORM dibanding Prisma untuk zero-overhead SQL performance.
- **ADR-003**: Menetapkan Mandatory Automated Testing Rule (Unit, Integration Vitest & E2E Playwright) dengan threshold coverage minimal **≥ 80%** (global/services) dan **≥ 90%** (critical/auth/payment modules), serta melengkapi skill `skill-automated-testing`.
- **ADR-004**: Mengadopsi **Spec-Driven Multi-Agent Workflow (SDD)** dengan direktori `.ai/` (`specs/features/`, `plans/`, `tasks/`, `decisions/`, `project-state.md`), batasan peran ketat (*strict boundaries* untuk PM, Architect, Engineers, QA), serta *Dependency-First Task Breakdown* untuk mencegah konflik antar modul.
- **ADR-005**: Boilerplate tetap adaptif; pilihan coupled/decoupled, runtime/package manager, database, dan source roots di-resolve dari project state/feature plan -> Accepted ADR -> `MEMORY.md` -> default `STACK.md`, lalu digunakan konsisten oleh seluruh agent dan skill.

## 🐛 Known Issues & Technical Debts
- None yet.

## 🎯 Next Immediate Steps
- [ ] Ingest first project request and record the selected profile in an Accepted ADR and `.ai/project-state.md` before implementation.


