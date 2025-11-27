import { test, expect } from "@playwright/test";
test.describe("historia:Gestion de tareas - UI", () => {
  test("criterio:El sistema tiene una sección dedicada para la gestión de tareas relacionadas con las plantas.", async ({
    page,
  }) => {
    await page.goto("http://localhost:3000/");
    await page.getByRole("link", { name: "ver todas" }).click();
    await expect(
      page.getByRole("heading", { name: "Regar Sector Tomates" })
    ).toBeVisible();
  });
});

// TEST 2

test.describe("historia:Gestion de tareas - UI", () => {
  test("criterio:En la sección se visualizan todas las tareas programadas (riego, siembra, cuidado, cosecha) de forma clara.", async ({
    page,
  }) => {
    await page.goto("http://localhost:3000/");
    await expect(page.getByRole("link", { name: "ver todas" })).toBeVisible();
    await page.getByRole("link", { name: "ver todas" }).click();
    await expect(page.getByText("Tareas Programadas🌧️ Riego:")).toBeVisible();
    await expect(page.getByText("🌧️ Riego: Regar sector")).toBeVisible();
    await expect(page.getByText("🌱 Siembra: Plantar albahaca")).toBeVisible();
    await expect(page.getByText("✂️ Cuidado: Podar hojas secas")).toBeVisible();
    await expect(page.getByText("🧺 Cosecha: Recolectar")).toBeVisible();
  });
});
