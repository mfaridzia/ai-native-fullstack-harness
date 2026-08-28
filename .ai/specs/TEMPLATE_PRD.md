# PRD Specification: [Feature Name]

> **Status**: [Draft / In Review / Approved]  
> **Author (PM)**: 03-product-manager  
> **Target Version**: [MVP / v1.0]  
> **Approval**: [Pending / Approved by <name/date>]

---

## 1. Executive Summary & Problem Statement
* **Problem**: Deskripsikan masalah spesifik yang dihadapi pengguna.
* **Solution**: Gambaran solusi fitur yang akan dibangun.
* **Business Value**: Mengapa fitur ini penting bagi produk.

### Product Intake Context
* **Primary Users & Situation**: Siapa yang menggunakan produk, dalam situasi apa, dan pekerjaan apa yang mereka selesaikan.
* **Product Positioning**: Mekanisme atau nilai pembeda yang sudah dikonfirmasi.
* **Evidence & Existing Assets**: Data, content, brand assets, research, atau existing implementation yang benar-benar tersedia.
* **Open Product Decisions**: Fakta material yang belum diputuskan; jangan mengarang jawaban.

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
* **Frontend Surface (if applicable)**: [Operate / Persuade / Read / Experience / Not applicable].
* **Brand & Visual Constraints**: [Existing DESIGN.md/assets/references to preserve; omit if not confirmed].
* **Motion Constraints**: [Functional needs, reduced-motion requirement, or Not applicable].

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

---

## 8. Approval Gate
- [ ] Material assumptions have been confirmed or explicitly recorded as open.
- [ ] In-scope, out-of-scope, and observable acceptance criteria are approved by the user.
- [ ] No architecture, visual styling, product claims, or production code has been invented inside this PRD.
- [ ] Status may change to `Approved` only after explicit human confirmation.
