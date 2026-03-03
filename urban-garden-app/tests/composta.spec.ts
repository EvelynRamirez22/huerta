

import { test, expect } from '@playwright/test';
test.describe("historia:Composta", () => {
test('test', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await page.getByRole('link', { name: 'Guía de Cultivo' }).click();
  await page.getByRole('heading', { name: '🌱 Guía de Cultivo' }).click();
  await page.getByRole('heading', { name: 'Cómo preparar composta' }).click();
  await page.getByRole('heading', { name: '🧺 Materiales necesarios' }).click();
  await page.getByText('Restos de frutas y verduras').click();
  await page.getByText('Hojas secas').click();
  await page.getByText('Ramas pequeñas', { exact: true }).click();
  await page.getByText('Tierra', { exact: true }).click();
  await page.getByText('Agua').click();
  await page.getByText('Un recipiente o espacio en el').click();
  await page.getByRole('heading', { name: '📝 Pasos detallados' }).click();
  await page.getByText('Coloca una capa de materiales').click();
  await page.getByText('Agrega una capa de restos org').click();
  await page.getByText('Añade un poco de tierra para').click();
  await page.getByText('Humedece ligeramente la').click();
  await page.getByText('Repite las capas hasta llenar').click();
  await page.getByText('Revuelve la mezcla cada 1 o 2').click();
  await page.getByText('En 2-3 meses tendrás composta').click();
  await page.getByText('💡 Consejo: Evita agregar').click();
})
});