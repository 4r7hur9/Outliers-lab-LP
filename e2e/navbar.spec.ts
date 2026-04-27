/**
 * Testes E2E — Navbar
 *
 * Verifica a navegação por meio da barra de navegação.
 */
import { test, expect } from '@playwright/test'

test.describe('Navbar', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/')
  })

  test('exibe o logotipo "Outliers Lab"', async ({ page }) => {
    // Usa o locator da navbar para evitar conflito com o rodapé
    const logo = page.locator('nav .navbar__logo')
    await expect(logo).toBeVisible()
  })

  test('exibe links de navegação', async ({ page }) => {
    const navbar = page.locator('nav')
    await expect(navbar.getByRole('link', { name: 'Início' })).toBeVisible()
    await expect(navbar.getByRole('link', { name: 'Sobre' })).toBeVisible()
    await expect(navbar.getByRole('link', { name: 'Serviços' })).toBeVisible()
    await expect(navbar.getByRole('link', { name: 'Contato' })).toBeVisible()
  })

  test('clique em "Sobre" navega para /sobre', async ({ page }) => {
    await page.locator('nav').getByRole('link', { name: 'Sobre' }).click()
    await expect(page).toHaveURL('/sobre')
  })

  test('clique em "Serviços" navega para /servicos', async ({ page }) => {
    await page.locator('nav').getByRole('link', { name: 'Serviços' }).click()
    await expect(page).toHaveURL('/servicos')
  })

  test('clique em "Fale Conosco" navega para /contato', async ({ page }) => {
    await page.locator('nav').getByRole('link', { name: 'Fale Conosco' }).click()
    await expect(page).toHaveURL('/contato')
  })
})
