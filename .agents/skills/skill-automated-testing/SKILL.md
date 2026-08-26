---
name: skill-automated-testing
description: "Prosedur penulisan Unit & Integration Test (Vitest), mocking API/DB, dan audit code coverage threshold (≥80%-90%)."
---

# Skill Procedure: Automated Unit & Integration Testing (Vitest)

Gunakan skill ini setiap kali membuat atau memodifikasi service, util function, atau API route untuk memastikan stabilitas dan pemenuhan coverage threshold.

---

## 1. Standar Coverage Threshold
- **Global / Services / Utils**: Minimal **≥ 80%** (*Lines, Statements, Functions, Branches*).
- **Critical Modules (Auth, Payment/Checkout, Security/RBAC)**: Minimal **≥ 90%** test coverage.

---

## 2. Struktur File & Penempatan Test (Strict Co-location Rule)
- **WAJIB Co-location**: Simpan file unit/component test **persis berdampingan** dengan file implementasinya:
  - Service: `<module-root>/auth.service.ts` -> `<module-root>/auth.service.test.ts`
  - Route: `<module-root>/auth.route.ts` -> `<module-root>/auth.route.test.ts`
  - UI: `<ui-root>/button.tsx` -> `<ui-root>/button.test.tsx`
  - Util: `<utils-root>/format.ts` -> `<utils-root>/format.test.ts`
- Gunakan ekstensi `*.test.ts` atau `*.test.tsx`.
- **Dilarang** membuat folder test unit terpisah dari implementation module (misal: root `tests/unit/`) agar domain encapsulation tetap utuh. Lokasi implementation root mengikuti profile aktif.

---

## 3. Pola Pengujian (Test Patterns)

Contoh berikut menunjukkan pola test; sesuaikan import alias dan module root dengan approved plan.

### A. Testing Service / Business Logic Murni
```ts
import { describe, it, expect } from "vitest";
import { calculateDiscount } from "./discount.service";

describe("calculateDiscount", () => {
  it("should apply 10% discount for regular members", () => {
    const result = calculateDiscount(100000, "REGULAR");
    expect(result).toBe(90000);
  });

  it("should throw error on negative amount (Edge Case)", () => {
    expect(() => calculateDiscount(-100, "REGULAR")).toThrowError("Invalid amount");
  });
});
```

### B. Testing Hono API Endpoint (Integration Test tanpa Server Nyala)
```ts
import { describe, it, expect } from "vitest";
import { app } from "@/app";

describe("POST /api/auth/login", () => {
  it("should return 400 when body fails Zod validation", async () => {
    const res = await app.request("/api/auth/login", {
      method: "POST",
      body: JSON.stringify({ email: "invalid-email" }),
      headers: { "Content-Type": "application/json" },
    });

    expect(res.status).toBe(400);
    const body = await res.json();
    expect(body.success).toBe(false);
  });
});
```

### C. Testing Frontend UI & Shared Components (React Testing Library)
```tsx
import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { Button } from "@/components/ui/button";

describe("<Button />", () => {
  it("renders button text correctly", () => {
    render(<Button>Click Me</Button>);
    expect(screen.getByRole("button", { name: /click me/i })).toBeInTheDocument();
  });

  it("handles onClick event", () => {
    const handleClick = vi.fn();
    render(<Button onClick={handleClick}>Submit</Button>);
    fireEvent.click(screen.getByRole("button", { name: /submit/i }));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("is disabled when disabled prop is true", () => {
    render(<Button disabled>Disabled</Button>);
    expect(screen.getByRole("button", { name: /disabled/i })).toBeDisabled();
  });
});
```

---

## 4. Eksekusi & Audit Coverage
1. Resolve package manager dari profile aktif, lalu jalankan project script `test`.
2. Jalankan project script `test:coverage`; script tersebut harus memakai konfigurasi Vitest yang meng-enforce threshold.
3. Jika coverage di bawah target (80% / 90%), identifikasi missing lines/branches pada report lalu tambahkan test case untuk edge-cases tersebut.
4. **DILARANG keras menggunakan `test.skip` atau mengomentari test yang gagal**.
