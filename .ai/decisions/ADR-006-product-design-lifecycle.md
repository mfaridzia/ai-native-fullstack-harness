# ADR-006: Product Intake and Frontend Design Lifecycle

- **Status**: Accepted
- **Date**: 2026-08-28
- **Decision Owners**: Repository maintainer

## Context

The boilerplate previously routed product work through PRD and architecture gates, but its frontend skill prescribed generic HSL, Google Fonts, glassmorphism, Bento Grid, and fixed hover scaling. Those aesthetic defaults could generate visually repetitive AI output and did not define when durable product or design context should be created.

The repository needs one reproducible lifecycle that turns an initial idea into approved product scope, architecture, visual direction, implementation, and durable context without letting multiple design skills compete.

## Decision

1. An initial prompt starts product intake. The PM drafts a PRD and waits for explicit approval before architecture planning.
2. The Architect resolves the active implementation profile, writes the ADR/plan/tasks, and waits for explicit approval before production implementation.
3. Product projects create root `PRODUCT.md` through Impeccable after approved product intake and before new visual work. The meta-boilerplate does not ship a generic `PRODUCT.md`.
4. Impeccable is the default frontend design authority and owns product context, UX/design workflow, compatibility with the incumbent system, critique, audit, and finish review.
5. Taste Skill is limited to art direction for approved Persuade/Experience marketing surfaces. It is not used for dashboards, data tables, admin, forms, or other Operate surfaces.
6. Marketing surfaces use one direction round: Impeccable captures missing product context, Taste proposes the art direction, the human approves it, and Impeccable treats it as pinned input during compatibility checks and finish review.
7. Emil Kowalski specialist skills own justified motion decisions only. They do not override layout, typography, color, brand, or product direction, and Impeccable does not open a competing motion direction when Emil is available.
8. New or replacement visual worlds require human direction approval before implementation.
9. Existing coherent interfaces are documented rather than silently redesigned. Greenfield `DESIGN.md` is created from the approved implemented world during finish review; local extensions update it only when an approved durable system decision changes.
10. The obsolete generic glassmorphism/Bento/fixed-motion recipe becomes a routing skill and no longer prescribes an aesthetic.

## Consequences

- New projects incur explicit PRD, architecture, and visual-direction checkpoints, reducing wrong-but-polished implementations.
- `PRODUCT.md`, feature PRDs, and `DESIGN.md` have non-overlapping ownership.
- Design skills can coexist without ambiguous authority.
- Third-party skills are installed project-locally after clone, pinned by `.ai/agent-skills.lock.json`, and excluded from Git. The committed bootstrap script restores identical capabilities without vendoring upstream files.
- Product UI favors clarity and established system evidence; marketing surfaces can use a more expressive specialist without leaking that aesthetic into operational interfaces.
