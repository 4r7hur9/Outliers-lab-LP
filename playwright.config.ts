import { defineConfig, devices } from '@playwright/test'

/**
 * Configuração do Playwright para testes E2E (End-to-End).
 * Executa o servidor de desenvolvimento Vite antes dos testes.
 * Documentação: https://playwright.dev/docs/test-configuration
 */
export default defineConfig({
  // Diretório com os arquivos de teste E2E
  testDir: './e2e',

  // Timeout por teste (30 segundos)
  timeout: 30_000,

  // Número de tentativas em caso de falha (CI: 2, local: 0)
  retries: process.env.CI ? 2 : 0,

  // Execução paralela dos testes
  fullyParallel: true,

  // Falha o build se houver test.only acidentalmente
  forbidOnly: !!process.env.CI,

  // Reporter: lista no terminal + HTML para análise
  reporter: [['list'], ['html', { open: 'never' }]],

  use: {
    // URL base da aplicação em desenvolvimento
    baseURL: 'http://localhost:5173',
    // Captura rastreio em caso de falha
    trace: 'on-first-retry',
    // Captura screenshot em caso de falha
    screenshot: 'only-on-failure',
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],

  // Inicia o servidor Vite antes dos testes E2E
  webServer: {
    command: 'npm run dev',
    url: 'http://localhost:5173',
    reuseExistingServer: !process.env.CI,
    timeout: 60_000,
  },
})
