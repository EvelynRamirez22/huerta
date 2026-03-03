import { test, expect } from '@playwright/test';
test.describe("Lugar ideal", () => {

test('test', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await page.getByRole('link', { name: 'Mapa' }).click();
  await page.getByRole('heading', { name: '🗺️ Mapa de Zonas de Cultivo' }).click();
  await page.getByText('Haz clic en una zona para').click();
  await page.getByRole('heading', { name: 'Zona Soleada' }).click();
  await page.getByText('Recibe sol directo más de 6').nth(1).click();
  await page.getByRole('heading', { name: '🌱 Plantas recomendadas:' }).click();
  await page.getByText('Tomate').click();
  await page.getByText('Pimiento').click();
  await page.getByText('Lechuga').click();
  await page.getByText('Albahaca').click();
  await page.getByRole('heading', { name: 'Zona Parcialmente Sombreada' }).click();
  await page.getByRole('heading', { name: 'Zona Parcialmente Sombreada' }).nth(1).click();
  await page.getByText('Recibe sol entre 3 y 6 horas').nth(1).click();
  await page.getByRole('heading', { name: '🌱 Plantas recomendadas:' }).click();
  await page.getByText('Espinaca').click();
  await page.getByText('Zanahoria').click();
  await page.getByText('Cebolla').click();
  await page.getByText('Zona HúmedaÁrea con mayor').click();
  await page.getByRole('heading', { name: 'Zona Húmeda' }).nth(1).click();
  await page.getByRole('heading', { name: '🌱 Plantas recomendadas:' }).click();
  await page.getByText('Menta').click();
  await page.getByText('Menta').click();
  await page.getByText('Apio').click();
  await page.getByText('Acelga').click();
})
});