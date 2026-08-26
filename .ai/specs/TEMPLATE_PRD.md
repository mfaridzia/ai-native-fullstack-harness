# PRD Specification: [Feature Name]

> **Status**: [Draft / In Review / Approved]  
> **Author (PM)**: 03-product-manager  
> **Target Version**: [MVP / v1.0]  

---

## 1. Executive Summary & Problem Statement
* **Problem**: Deskripsikan masalah spesifik yang dihadapi pengguna.
* **Solution**: Gambaran solusi fitur yang akan dibangun.
* **Business Value**: Mengapa fitur ini penting bagi produk.

---

## 2. Scope & Boundaries (Anti-Overengineering)
### ✅ In-Scope (Wajib Dikerjakan)
- [ ] Fitur A: ...
- [ ] Fitur B: ...

### ❌ Out-of-Scope (DILARANG Dikerjakan pada Sprint Ini)
- Fitur X (Disimpan untuk Phase 2 / Future milestone).
- Premature abstractions atau optimasi yang tidak diminta.

---

## 3. User Personas & User Stories
| ID | Sebagai (Role) | Saya ingin (Aksi) | Sehingga (Manfaat) |
| :--- | :--- | :--- | :--- |
| **US-01** | [Persona] | [Aksi yang dibutuhkan] | [Manfaat yang diperoleh] |

---

## 4. Functional Requirements
1. **FR-01 (Autentikasi & Otorisasi)**: ...
2. **FR-02 (Data Management)**: ...
3. **FR-03 (UI & Validasi)**: ...

---

## 5. Non-Functional Requirements & Constraints
* **Performance**: [Target terukur dan kondisi pengujiannya].
* **Security**: [Authorization, isolation, privacy, dan validation requirements yang relevan].
* **Accessibility**: [Target WCAG dan kebutuhan interaksi yang relevan].

---

## 6. Edge Cases, Failure Scenarios & Empty States
* **Edge Case**: [Kondisi batas] -> [Expected behavior].
* **Failure Scenario**: [Kegagalan dependency/network] -> [Recovery atau user feedback].
* **Empty State**: [Kondisi tanpa data] -> [Expected UI/behavior].

---

## 7. Acceptance Criteria (Kriteria Lolos Uji)
- [ ] **AC-01**: [Observable happy-path behavior].
- [ ] **AC-02**: [Observable authorization/error/edge-case behavior].
- [ ] **AC-03**: Relevant automated tests dan quality gates memenuhi `CODING_RULES.md`.
