# ADR-005: Adaptive Project Profile Resolution

> **Status**: Accepted  
> **Date**: 2026-08-26  
> **Author**: 04-systems-architect / Tech Lead  
> **Deciders**: Project Maintainer

## Context

Boilerplate ini sengaja mendukung coupled atau decoupled architecture, Bun atau Node.js, serta beberapa database. Agent memerlukan urutan resolusi yang deterministik agar pilihan tersebut tidak tercampur dalam satu project.

## Decision

Resolve architecture, runtime, package manager, database, dan source roots dengan precedence:

1. `.ai/project-state.md` dan approved feature plan aktif.
2. ADR berstatus Accepted di `.ai/decisions/`.
3. Ringkasan keputusan permanen di `MEMORY.md`.
4. Default selection rules di `STACK.md`.

Pilihan yang belum tersedia dan memengaruhi implementasi harus diselesaikan saat project intake dan dicatat sebelum coding. Agent, skill, dan task template menggunakan path serta command dari profile yang sudah dipilih.

## Consequences

- Boilerplate tetap fleksibel tanpa membuat profile file tambahan.
- Setiap generated project memiliki command dan layout yang konsisten.
- Project intake memiliki satu langkah keputusan tambahan sebelum implementation planning.
