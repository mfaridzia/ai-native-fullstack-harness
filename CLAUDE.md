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

## 🧭 Project Intake & Approval Gates
- An initial product idea is an intake trigger, not authorization to generate the entire application in one pass.
- For a new product or Tier 3 feature, follow this order:
  1. `03-product-manager` explores the repository, asks only material questions, and drafts the PRD.
  2. Stop for explicit human PRD approval.
  3. `04-systems-architect` resolves the active profile and drafts the ADR, technical plan, and dependency-ordered tasks.
  4. Stop for explicit human architecture/plan approval.
  5. If frontend work is in scope, establish product and visual context using the design routing below and stop for visual-direction approval when a new visual world is required.
  6. Implement in dependency order, then verify, audit, and synchronize project state.
- Do not create generic `PRODUCT.md` or `DESIGN.md` in this meta-boilerplate. Each initialized product project owns these files at its project root.
- `PRODUCT.md` records durable, confirmed product truth. Feature PRDs remain the authority for feature scope and acceptance criteria.
- `DESIGN.md` records durable visual decisions. For greenfield work, create it from the approved, implemented visual world during finish review; do not invent it before the first real surface exists.

## 🤖 Subagents Routing & Strict Role Boundaries
- Subagents are located in `.agents/agents/` (Antigravity) and `.claude/agents/` (Claude Code).
- **03-product-manager**: PRD & Scope Only -> NO CODE.
- **04-systems-architect**: Architecture, DB/API Contract & Plans Only -> NO PRODUCTION CODE.
- **08-database-specialist**: Drizzle Schema & Migrations.
- **05-backend-engineer**: Hono.js API & Vitest Unit Tests.
- **06-frontend-engineer**: React, TanStack & Tailwind UI.
- **07-fullstack-engineer**: Cross-layer integration.
- **09-qa-security-auditor**: Diff audit against PRD & OWASP check -> implementation review only; may write only `e2e/**`.

## 🎨 Frontend Design Skill Routing

### Skill bootstrap
- Third-party design skills are generated project-locally and are intentionally not committed. Their pinned sources live in `.ai/agent-skills.lock.json`.
- After cloning, run `node scripts/setup-agent-skills.mjs`. Use `--check` for a read-only synchronization check and `--force` only when intentionally replacing manifest-managed generated directories.
- If a required third-party skill is missing, report it and request authorization before any networked setup. Do not silently fall back to generic visual recipes.

### Default design authority
- Use `impeccable` as the default workflow for frontend design, redesign, UX shaping, critique, audit, responsive adaptation, design-system extraction, and final polish.
- Before new visual work, establish `PRODUCT.md` with Impeccable `init` when it is missing. Reuse approved PRDs and repository evidence; ask only about material gaps and never invent users, claims, evidence, or brand commitments.
- Preserve the approved PRD, `PRODUCT.md`, `DESIGN.md`, existing tokens/components, and explicit brand constraints. A missing `DESIGN.md` alone does not authorize a redesign.

### Surface routing
- **Operate surfaces** (authenticated apps, dashboards, admin, settings, forms, tables, onboarding, tools): Impeccable is the sole visual-design authority. Do not invoke Taste Skill.
- **Persuade/Experience marketing surfaces** (landing pages, campaign pages, public marketing, portfolios): use `design-taste-frontend` for art direction and composition after product truth is established. Impeccable remains responsible for product context, approved direction, design-system compatibility, accessibility, responsive quality, and finish review.
- Marketing sequence: run Impeccable `init` only when product context is missing, let Taste produce the design read/art direction, obtain human approval, then treat that direction as pinned input for implementation and Impeccable finish review. Do not open a second, competing Impeccable visual-direction round.
- **Read surfaces** (docs, articles, guides, help): use Impeccable unless the approved brief explicitly calls for a marketing/editorial art-direction pass.

### Motion specialist
- Use Emil Kowalski's `animate` only to implement justified motion, transitions, gestures, and micro-interactions after layout and visual direction are settled.
- When Emil skills are available, do not use Impeccable `animate` as a competing motion authority; Impeccable may still audit motion as part of overall accessibility and quality.
- Use `find-animation-opportunities` for a read-only opportunity scan, `improve-animations` for a read-only codebase audit and plans, `review-animations` for strict motion review, and `animation-vocabulary` only to name an effect.
- Emil skills own motion decisions only. They must not replace approved layout, typography, colors, brand, or product direction.
- Motion must have a named purpose, match frequency of use, use the cheapest suitable tool, and ship reduced-motion and pointer/hover handling.

### Design conflict precedence
1. Explicit user direction and approved feature PRD.
2. Confirmed `PRODUCT.md` and approved `DESIGN.md`.
3. Approved surface brief or visual direction.
4. Surface-specific routing above.
5. Impeccable defaults.
6. Taste or Emil specialist recommendations within their assigned scope.

Do not run Impeccable and Taste as competing visual authorities. On marketing surfaces, Taste owns art direction while Impeccable owns context, constraints, and quality gates. On product surfaces, do not load Taste.

## 🔄 Session End Protocol
Always update `.ai/project-state.md` and `MEMORY.md` at the end of each session with the progress made.
