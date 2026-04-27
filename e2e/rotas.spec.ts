/**
 * Testes E2E — Navegação e Rotas
 *
 * Verifica que as rotas principais da aplicação funcionam
 * corretamente e exibem o conteúdo esperado.
 */
import { test, expect } from '@playwright/test'

test.describe('Rotas da aplicação', () => {
  test('página inicial carrega com o título correto na aba', async ({ page }) => {
    await page.goto('/')
    await expect(page).toHaveTitle(/outliers lab/i)
  })

  test('página inicial exibe o hero com o título principal', async ({ page }) => {
    await page.goto('/')
    await expect(
      page.getByRole('heading', { name: /transformamos/i })
    ).toBeVisible()
  })

  test('página inicial exibe o badge "Laboratório de Dados"', async ({ page }) => {
    await page.goto('/')
    await expect(page.getByText(/laboratório de dados/i)).toBeVisible()
  })

  test('navegação para /sobre funciona', async ({ page }) => {
    await page.goto('/sobre')
    await expect(page.getByText(/sobre nós/i).first()).toBeVisible()
  })

  test('navegação para /servicos funciona', async ({ page }) => {
    await page.goto('/servicos')
    await expect(page.getByText(/nossos serviços/i).first()).toBeVisible()
  })

  test('navegação para /contato funciona', async ({ page }) => {
    await page.goto('/contato')
    await expect(page.getByText(/entre em contato/i).first()).toBeVisible()
  })

  test('rota inexistente exibe a página 404', async ({ page }) => {
    await page.goto('/pagina-que-nao-existe')
    await expect(page.getByText('404')).toBeVisible()
    await expect(
      page.getByRole('heading', { name: /página não encontrada/i })
    ).toBeVisible()
  })
})
