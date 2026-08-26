# AI Assistant Core Instructions & Agent Routing

Please read and strictly follow the project rules and architecture specs located in:
- `WORKFLOW.md` (Spec-Driven Multi-Agent Development Pipeline)
- `CODING_RULES.md` (Code standards, type-safety, testing thresholds)
- `ARCHITECTURE.md` (System design & communication contracts)
- `STACK.md` (Tech stack specifications)
- `.ai/project-state.md` (Active sprint & scratchpad)
- `MEMORY.md` (Long-term ADRs & persistent memory)

Before implementation, resolve the active architecture, runtime, package manager, database, and source roots using the precedence defined in `WORKFLOW.md` and ADR-005: active project state/approved feature plan -> Accepted ADR -> `MEMORY.md` -> `STACK.md` defaults. Do not mix commands or directory conventions from different profiles. If a required choice is still unresolved and materially affects the work, record the decision before coding.

## 📁 Spec-Driven Directory Layout (.ai/)
- PRDs & Feature Specs: `.ai/specs/features/[feature].md` (Templates: `.ai/specs/TEMPLATE_PRD.md`)
- Technical Plans: `.ai/plans/[feature]-plan.md` (Templates: `.ai/plans/TEMPLATE_PLAN.md`)
- Task Breakdowns: `.ai/tasks/[feature]-tasks.md` (Templates: `.ai/tasks/TEMPLATE_TASKS.md`)
- Architectural Decisions: `.ai/decisions/`

## 🤖 Subagents Routing & Strict Role Boundaries
- Subagents are located in `.agents/agents/` (Antigravity) and `.claude/agents/` (Claude Code).
- **03-product-manager**: PRD & Scope Only -> NO CODE.
- **04-systems-architect**: Architecture, DB/API Contract & Plans Only -> NO PRODUCTION CODE.
- **08-database-specialist**: Drizzle Schema & Migrations.
- **05-backend-engineer**: Hono.js API & Vitest Unit Tests.
- **06-frontend-engineer**: React, TanStack & Tailwind UI.
- **07-fullstack-engineer**: Cross-layer integration.
- **09-qa-security-auditor**: Diff audit against PRD & OWASP check -> implementation review only; may write only `e2e/**`.

## 🔄 Session End Protocol
Always update `.ai/project-state.md` and `MEMORY.md` at the end of each session with the progress made.
