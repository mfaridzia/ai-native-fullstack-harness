# Task Breakdown: [Feature Name]

> **Spec**: `../specs/features/[feature-name].md`  
> **Plan**: `../plans/[feature-name]-plan.md`  
> **Status**: [In Progress / Completed]  

Semua path dan command di bawah WAJIB dimaterialisasikan dari approved plan. Jangan menyalin placeholder atau mencampur layout coupled/decoupled.

---

## 📋 Dependency-Ordered Task Matrix

### 🧱 Phase 1: Foundation Layer (Database & Contracts)
- [ ] **TASK-01 [08-database-specialist]**: Buat schema Drizzle pada database schema root dari approved plan.
- [ ] **TASK-02 [08-database-specialist]**: Jalankan project scripts `db:generate` dan `db:migrate` dengan package manager aktif setelah target database development/test diverifikasi.
- [ ] **TASK-03 [04-systems-architect]**: Finalisasi desain kontrak Zod/API di plan; jangan mengubah production source.
- [ ] **TASK-04 [05-backend-engineer / 07-fullstack-engineer]**: Implementasikan shared Zod schemas pada contract root dari approved plan.

---

### ⚙️ Phase 2: Backend Implementation & Unit Testing
- [ ] **TASK-05 [05-backend-engineer]**: Buat service logic pada feature module dari approved plan.
- [ ] **TASK-06 [05-backend-engineer]**: Buat Hono route handler pada feature module dari approved plan.
- [ ] **TASK-07 [05-backend-engineer]**: Tulis Vitest unit & integration tests berdampingan dengan implementasi dan pastikan coverage memenuhi threshold.

---

### 🎨 Phase 3: Frontend Client, UI Components & Component Testing
- [ ] **TASK-08 [06-frontend-engineer]**: Implementasikan data client/hooks atau Server Actions sesuai approved plan.
- [ ] **TASK-09 [06-frontend-engineer]**: Buat feature UI components mengikuti design system aktif.
- [ ] **TASK-10 [06-frontend-engineer]**: Sambungkan route menggunakan router yang dipilih profile aktif.
- [ ] **TASK-11 [06-frontend-engineer]**: Tulis unit/component tests berdampingan dengan component dan hooks; pastikan coverage memenuhi threshold.

---

### 🛡️ Phase 4: Verification, Security Audit & Quality Assurance
- [ ] **TASK-12 [09-qa-security-auditor]**: Tulis Playwright E2E test di `e2e/[feature].spec.ts`.
- [ ] **TASK-13 [09-qa-security-auditor]**: Audit diff terhadap Acceptance Criteria & OWASP tanpa mengubah implementation code.
- [ ] **TASK-14 [11-a11y-specialist]**: Verifikasi kepatuhan WCAG 2.1 AA (keyboard navigation, ARIA attributes).
- [ ] **TASK-15 [AI Assistant]**: Update `.ai/project-state.md` dan `MEMORY.md` sesuai session-end protocol.
