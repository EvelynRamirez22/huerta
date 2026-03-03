import { test, expect } from '@playwright/test';
test.describe("Lugar ideal", () => {
test('test', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await page.getByRole('link', { name: 'Semillas Disponibles' }).click();
  await page.getByRole('heading', { name: '🌾 Semillas Disponibles' }).click();
  await page.getByText('Aquí puedes ver las semillas').click();
  await page.getByRole('img', { name: 'Tomate' }).click();
  await page.getByRole('heading', { name: 'Tomate' }).click();
  await page.getByText('Tipo: Hortaliza de verano').first().click();
  await page.getByRole('paragraph').filter({ hasText: 'Tiempo de germinación: 7 a 14' }).getByRole('strong').click();
  await page.getByText('Tiempo de germinación: 7 a 14').click();
  await page.getByText('Cuidado: Necesita sol directo').click();
  await page.getByRole('img', { name: 'Lechuga' }).click();
  await page.getByRole('heading', { name: 'Lechuga' }).click();
  await page.getByText('Tipo: Hortaliza de hoja').click();
  await page.getByText('Tiempo de germinación:').nth(1).click();
  await page.getByText('Tiempo de germinación: 5 a 10').first().click();
  await page.getByText('Cuidado: Prefiere clima').click();
  await page.getByRole('heading', { name: 'Zanahoria' }).click();
  await page.getByText('Tipo: Raíz').click();
  await page.getByText('Tiempo de germinación:').nth(2).click();
  await page.getByText('Cuidado: Suelo suelto y').click();
  await page.getByRole('img', { name: 'Zanahoria' }).click();
  await page.getByRole('img', { name: 'Albahaca' }).click();
  await page.getByText('AlbahacaTipo: AromáticaTiempo').click();
  await page.getByText('Tipo: Aromática').click();
  await page.getByText('AlbahacaTipo: AromáticaTiempo').click();
  await page.getByText('Tiempo de germinación:').nth(3).click();
  await page.getByText('AlbahacaTipo: AromáticaTiempo').click();
})
});