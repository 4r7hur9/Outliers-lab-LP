# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: landing-page.spec.ts >> 404 Page - E2E >> deve exibir página 404 para rota inexistente
- Location: e2e\landing-page.spec.ts:85:3

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('text=404 - Página não encontrada')
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for locator('text=404 - Página não encontrada')

```

# Page snapshot

```yaml
- main [ref=e3]:
  - generic [ref=e4]:
    - heading "404" [level=1] [ref=e5]
    - heading "Página não encontrada" [level=2] [ref=e6]
    - paragraph [ref=e7]: Desculpe, a página que você está procurando não existe.
    - link "Voltar para a página inicial" [ref=e8] [cursor=pointer]:
      - /url: /
      - text: Voltar para Home
```

# Test source

```ts
  1   | import { test, expect } from "@playwright/test";
  2   | 
  3   | /**
  4   |  * Teste E2E: Navegação para página inicial
  5   |  * Valida que a LandingPage está acessível na rota /
  6   |  */
  7   | test.describe("Landing Page - E2E", () => {
  8   |   test.beforeEach(async ({ page }) => {
  9   |     /**
  10  |      * Antes de cada teste, navega para a página inicial
  11  |      */
  12  |     await page.goto("/");
  13  |   });
  14  | 
  15  |   test("deve carregar a landing page na rota /", async ({ page }) => {
  16  |     // Verifica que a URL é /
  17  |     expect(page.url()).toContain("localhost:5173");
  18  | 
  19  |     // Verifica que o título principal está presente
  20  |     const title = page.locator("h1");
  21  |     await expect(title).toContainText("Bem-vindo ao Outliers Lab");
  22  |   });
  23  | 
  24  |   test("deve renderizar Hero section", async ({ page }) => {
  25  |     // Verifica presença de elemento hero
  26  |     const heroSection = page.locator(".card").first();
  27  |     await expect(heroSection).toBeVisible();
  28  | 
  29  |     // Verifica descrição
  30  |     const description = page.locator("text=Uma plataforma inovadora");
  31  |     await expect(description).toBeVisible();
  32  |   });
  33  | 
  34  |   test("deve renderizar Features section", async ({ page }) => {
  35  |     // Verifica título de features
  36  |     const featuresTitle = page.locator("text=Funcionalidades Principais");
  37  |     await expect(featuresTitle).toBeVisible();
  38  | 
  39  |     // Verifica que existem 3 cards de features
  40  |     const featureCards = page.locator(".feature-card");
  41  |     await expect(featureCards).toHaveCount(3);
  42  | 
  43  |     // Verifica features específicas
  44  |     await expect(page.locator("text=Detecção Automática")).toBeVisible();
  45  |     await expect(page.locator("text=Visualização")).toBeVisible();
  46  |     await expect(page.locator("text=Exportação")).toBeVisible();
  47  |   });
  48  | 
  49  |   test("deve renderizar CTA section", async ({ page }) => {
  50  |     // Scroll até CTA
  51  |     const ctaTitle = page.locator("text=Pronto para começar?");
  52  |     await ctaTitle.scrollIntoViewIfNeeded();
  53  | 
  54  |     // Verifica visibilidade
  55  |     await expect(ctaTitle).toBeVisible();
  56  |     await expect(
  57  |       page.locator("text=Cadastre-se agora e explore"),
  58  |     ).toBeVisible();
  59  |   });
  60  | 
  61  |   test("deve ter botão funcional na Hero", async ({ page }) => {
  62  |     const button = page.locator("button", { hasText: /começar análise/i });
  63  |     await expect(button).toBeVisible();
  64  |     await expect(button).toBeEnabled();
  65  |   });
  66  | 
  67  |   test("deve ter botão funcional na CTA", async ({ page }) => {
  68  |     const ctaButton = page.locator("button", {
  69  |       hasText: /criar conta gratuita/i,
  70  |     });
  71  | 
  72  |     // Scroll para o botão
  73  |     await ctaButton.scrollIntoViewIfNeeded();
  74  | 
  75  |     await expect(ctaButton).toBeVisible();
  76  |     await expect(ctaButton).toBeEnabled();
  77  |   });
  78  | });
  79  | 
  80  | /**
  81  |  * Teste E2E: Navegação para rotas inválidas
  82  |  * Valida que a página 404 é exibida para rotas inexistentes
  83  |  */
  84  | test.describe("404 Page - E2E", () => {
  85  |   test("deve exibir página 404 para rota inexistente", async ({ page }) => {
  86  |     await page.goto("/rota-inexistente");
  87  | 
  88  |     // Verifica mensagem de erro
  89  |     const errorTitle = page.locator("text=404 - Página não encontrada");
> 90  |     await expect(errorTitle).toBeVisible();
      |                              ^ Error: expect(locator).toBeVisible() failed
  91  | 
  92  |     // Verifica link de retorno
  93  |     const homeLink = page.locator("a", { hasText: /voltar para home/i });
  94  |     await expect(homeLink).toBeVisible();
  95  |     await expect(homeLink).toHaveAttribute("href", "/");
  96  |   });
  97  | 
  98  |   test('deve navegar para home ao clicar em "Voltar para Home"', async ({
  99  |     page,
  100 |   }) => {
  101 |     await page.goto("/rota-inexistente");
  102 | 
  103 |     const homeLink = page.locator("a", { hasText: /voltar para home/i });
  104 |     await homeLink.click();
  105 | 
  106 |     // Verifica que voltou para /
  107 |     expect(page.url()).toContain("localhost:5173/");
  108 | 
  109 |     // Verifica que a landing page é exibida
  110 |     const landingPageTitle = page.locator("text=Bem-vindo ao Outliers Lab");
  111 |     await expect(landingPageTitle).toBeVisible();
  112 |   });
  113 | });
  114 | 
  115 | /**
  116 |  * Teste E2E: Performance e acessibilidade
  117 |  * Valida que a página carrega rapidamente e tem elementos acessíveis
  118 |  */
  119 | test.describe("Landing Page - Performance & Accessibility", () => {
  120 |   test("deve carregar em menos de 3 segundos", async ({ page }) => {
  121 |     const startTime = Date.now();
  122 |     await page.goto("/");
  123 |     const endTime = Date.now();
  124 | 
  125 |     const loadTime = endTime - startTime;
  126 |     expect(loadTime).toBeLessThan(3000);
  127 |   });
  128 | 
  129 |   test("deve ter títulos (h1, h2) para estrutura semântica", async ({
  130 |     page,
  131 |   }) => {
  132 |     await page.goto("/");
  133 | 
  134 |     const h1s = page.locator("h1");
  135 |     const h2s = page.locator("h2");
  136 | 
  137 |     await expect(h1s).toHaveCount(1);
  138 |     expect(await h2s.count()).toBeGreaterThanOrEqual(2);
  139 |   });
  140 | 
  141 |   test("deve ter botões com texto descritivo", async ({ page }) => {
  142 |     await page.goto("/");
  143 | 
  144 |     const buttons = page.locator("button");
  145 |     const count = await buttons.count();
  146 | 
  147 |     expect(count).toBeGreaterThan(0);
  148 | 
  149 |     // Verifica que cada botão tem texto
  150 |     for (let i = 0; i < count; i++) {
  151 |       const text = await buttons.nth(i).textContent();
  152 |       expect(text?.trim().length).toBeGreaterThan(0);
  153 |     }
  154 |   });
  155 | });
  156 | 
```