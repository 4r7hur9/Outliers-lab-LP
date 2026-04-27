/**
 * Testes E2E — Formulário de Contato
 *
 * Verifica a interação completa com o formulário de contato.
 */
import { test, expect } from '@playwright/test'

test.describe('Formulário de Contato', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/contato')
  })

  test('exibe o formulário de contato', async ({ page }) => {
    await expect(page.getByRole('form', { name: /formulário de contato/i })).toBeVisible()
  })

  test('exibe todos os campos obrigatórios', async ({ page }) => {
    await expect(page.getByLabel(/nome completo/i)).toBeVisible()
    await expect(page.getByLabel(/e-mail/i)).toBeVisible()
    await expect(page.getByLabel(/mensagem/i)).toBeVisible()
  })

  test('preenche e envia o formulário com sucesso', async ({ page }) => {
    // Preenche os campos
    await page.getByLabel(/nome completo/i).fill('Ana Beatriz')
    await page.getByLabel(/e-mail/i).fill('ana@empresa.com')
    await page.getByLabel(/mensagem/i).fill('Gostaria de saber mais sobre os serviços.')

    // Envia o formulário
    await page.getByRole('button', { name: /enviar mensagem/i }).click()

    // Verifica estado de carregamento
    await expect(page.getByText(/enviando/i)).toBeVisible()

    // Aguarda a mensagem de sucesso (timeout de 3s para o setTimeout de simulação)
    await expect(page.getByText(/mensagem enviada/i)).toBeVisible({ timeout: 3000 })
  })

  test('exibe as informações de contato da empresa', async ({ page }) => {
    await expect(page.getByText(/contato@outlierslab/i)).toBeVisible()
    await expect(page.getByText(/são paulo/i)).toBeVisible()
  })

  test('exibe links para redes sociais', async ({ page }) => {
    await expect(page.getByRole('link', { name: /linkedin do outliers lab/i })).toBeVisible()
    await expect(page.getByRole('link', { name: /github do outliers lab/i })).toBeVisible()
  })
})
