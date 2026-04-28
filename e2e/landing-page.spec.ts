import { test, expect } from "@playwright/test";

/**
 * Teste E2E: Navegação para página inicial
 * Valida que a LandingPage está acessível na rota /
 */
test.describe("Landing Page - E2E", () => {
  test.beforeEach(async ({ page }) => {
    /**
     * Antes de cada teste, navega para a página inicial
     */
    await page.goto("/");
  });

  test("deve carregar a landing page na rota /", async ({ page }) => {
    // Verifica que a URL é /
    expect(page.url()).toContain("localhost:5173");

    // Verifica que o título principal está presente
    const title = page.locator("h1");
    await expect(title).toContainText("Bem-vindo ao Outliers Lab");
  });

  test("deve renderizar Hero section", async ({ page }) => {
    // Verifica presença de elemento hero
    const heroSection = page.locator(".card").first();
    await expect(heroSection).toBeVisible();

    // Verifica descrição
    const description = page.locator("text=Uma plataforma inovadora");
    await expect(description).toBeVisible();
  });

  test("deve renderizar Features section", async ({ page }) => {
    // Verifica título de features
    const featuresTitle = page.locator("text=Funcionalidades Principais");
    await expect(featuresTitle).toBeVisible();

    // Verifica que existem 3 cards de features
    const featureCards = page.locator(".feature-card");
    await expect(featureCards).toHaveCount(3);

    // Verifica features específicas
    await expect(page.locator("text=Detecção Automática")).toBeVisible();
    await expect(page.locator("text=Visualização")).toBeVisible();
    await expect(page.locator("text=Exportação")).toBeVisible();
  });

  test("deve renderizar CTA section", async ({ page }) => {
    // Scroll até CTA
    const ctaTitle = page.locator("text=Pronto para começar?");
    await ctaTitle.scrollIntoViewIfNeeded();

    // Verifica visibilidade
    await expect(ctaTitle).toBeVisible();
    await expect(
      page.locator("text=Cadastre-se agora e explore"),
    ).toBeVisible();
  });

  test("deve ter botão funcional na Hero", async ({ page }) => {
    const button = page.locator("button", { hasText: /começar análise/i });
    await expect(button).toBeVisible();
    await expect(button).toBeEnabled();
  });

  test("deve ter botão funcional na CTA", async ({ page }) => {
    const ctaButton = page.locator("button", {
      hasText: /criar conta gratuita/i,
    });

    // Scroll para o botão
    await ctaButton.scrollIntoViewIfNeeded();

    await expect(ctaButton).toBeVisible();
    await expect(ctaButton).toBeEnabled();
  });
});

/**
 * Teste E2E: Navegação para rotas inválidas
 * Valida que a página 404 é exibida para rotas inexistentes
 */
test.describe("404 Page - E2E", () => {
  test("deve exibir página 404 para rota inexistente", async ({ page }) => {
    await page.goto("/rota-inexistente");

    // Verifica mensagem de erro
    const errorTitle = page.locator("text=404 - Página não encontrada");
    await expect(errorTitle).toBeVisible();

    // Verifica link de retorno
    const homeLink = page.locator("a", { hasText: /voltar para home/i });
    await expect(homeLink).toBeVisible();
    await expect(homeLink).toHaveAttribute("href", "/");
  });

  test('deve navegar para home ao clicar em "Voltar para Home"', async ({
    page,
  }) => {
    await page.goto("/rota-inexistente");

    const homeLink = page.locator("a", { hasText: /voltar para home/i });
    await homeLink.click();

    // Verifica que voltou para /
    expect(page.url()).toContain("localhost:5173/");

    // Verifica que a landing page é exibida
    const landingPageTitle = page.locator("text=Bem-vindo ao Outliers Lab");
    await expect(landingPageTitle).toBeVisible();
  });
});

/**
 * Teste E2E: Performance e acessibilidade
 * Valida que a página carrega rapidamente e tem elementos acessíveis
 */
test.describe("Landing Page - Performance & Accessibility", () => {
  test("deve carregar em menos de 3 segundos", async ({ page }) => {
    const startTime = Date.now();
    await page.goto("/");
    const endTime = Date.now();

    const loadTime = endTime - startTime;
    expect(loadTime).toBeLessThan(3000);
  });

  test("deve ter títulos (h1, h2) para estrutura semântica", async ({
    page,
  }) => {
    await page.goto("/");

    const h1s = page.locator("h1");
    const h2s = page.locator("h2");

    await expect(h1s).toHaveCount(1);
    expect(await h2s.count()).toBeGreaterThanOrEqual(2);
  });

  test("deve ter botões com texto descritivo", async ({ page }) => {
    await page.goto("/");

    const buttons = page.locator("button");
    const count = await buttons.count();

    expect(count).toBeGreaterThan(0);

    // Verifica que cada botão tem texto
    for (let i = 0; i < count; i++) {
      const text = await buttons.nth(i).textContent();
      expect(text?.trim().length).toBeGreaterThan(0);
    }
  });
});
