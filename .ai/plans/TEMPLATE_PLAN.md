# Architecture & Implementation Plan: [Feature Name]

> **Spec Reference**: `../specs/features/[feature-name].md`  
> **Author (Architect)**: 04-systems-architect  
> **Status**: [Draft / Ready for Implementation]  
> **Approval**: [Pending / Approved by <name/date>]
> ⚠️ **STRICT RULE**: Dokumen ini hanya berisi rancangan arsitektur teknis & kontrak. Architect DILARANG menulis kode produksi di luar dokumen ini.

---

## 1. System Architecture & Component Diagram
Materialisasikan diagram sesuai architecture profile aktif; jangan menggabungkan pola coupled dan decoupled.

```
[ Client / Browser ]
         │ [Hono RPC Client / Server Action from active profile]
         ▼
[ Hono.js API Server ]
    ├── Middleware: [Feature-specific middleware]
    ├── Zod Request Schema Validator
    ├── Service / Business Logic Layer
    └── Drizzle ORM Data Access
         ▼
[ Database selected by active profile ]
```

---

## 2. Data Model & Database Schema (Drizzle ORM)
```typescript
// Proposed Drizzle Schema
// Tabel, Enums, Indexing, Foreign Keys
```

---

## 3. API Contracts & Type Definitions (Zod & Hono RPC)
```typescript
// Zod Input Schema
export const createItemSchema = z.object({
  name: z.string().min(3),
});

// Response Types & HTTP Status Codes
// POST /api/v1/items -> 201 Created | 400 Bad Request | 409 Conflict
```

---

## 4. Security & Isolation Strategy
* **Authorization / Data Isolation**: [Object ownership, tenant scope, or role policy relevant to this feature].
* **Authentication & Permissions**: [Session mechanism and required permissions].
* **Abuse Protection & Validation**: [Rate limits, validation, and feature-specific threats].

---

## 5. Dependency Graph & Layered Roadmap
Urutan pengerjaan wajib mengikuti hierarki dependensi bottom-up:
1. **Layer 0 (Foundation / Database)**: Schema Drizzle, Migration, Seeder.
2. **Layer 1 (Contract & Types)**: Zod validation schemas & Shared types.
3. **Layer 2 (Backend Service & API)**: Hono route handler, service logic, unit/integration tests.
4. **Layer 3 (Frontend Client & State)**: TanStack Query/Hono RPC or Server Actions, according to the active profile.
5. **Layer 4 (Frontend UI & UX)**: Page route, Tailwind components, Form validation, Micro-interactions.
6. **Layer 5 (Verification & QA)**: E2E test Playwright, Security diff audit, WCAG A11y.

## 6. Resolved Implementation Profile

- **Architecture**: [Decoupled / Unified]
- **Runtime & Package Manager**: [Bun / Node.js + npm]
- **Database**: [Selected supported database]
- **Backend Root**: [Path resolved for this project]
- **Frontend Root**: [Path resolved for this project]
- **Schema / Contract Root**: [Path resolved for this project]
- **Decision References**: [Accepted ADR paths]

## 7. Product & Design Context Plan (Frontend Scope Only)

- **Surface Mode**: [Operate / Persuade / Read / Experience]
- **Default Design Authority**: Impeccable
- **Art Direction Specialist**: [Taste for approved Persuade/Experience marketing surface / None]
- **Motion Specialist**: [Emil skills when justified / None]
- **PRODUCT.md State**: [Existing and confirmed / Create through Impeccable init after plan approval]
- **DESIGN.md State**: [Existing incumbent authority / Document incumbent system / Create at greenfield finish review]
- **Visual Evidence to Preserve**: [Tokens, components, assets, screenshots, approved references]
- **Visual Direction Gate**: [Required for new/replacement world / Not required for inherited local extension]
- **Finish Review**: [Rendered desktop/mobile inspection, Impeccable critique/audit/polish, motion review if applicable]

## 8. Architecture & Plan Approval Gate
- [ ] PRD status is Approved.
- [ ] Architecture, runtime/package manager, database, and source roots are resolved consistently.
- [ ] Contracts, task order, design-context prerequisites, and approval checkpoints are explicit.
- [ ] Human approval is recorded before production implementation begins.
