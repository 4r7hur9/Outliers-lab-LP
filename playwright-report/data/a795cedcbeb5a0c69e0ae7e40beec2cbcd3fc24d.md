# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: landing-page.spec.ts >> Landing Page - E2E >> deve renderizar Hero section
- Location: e2e\landing-page.spec.ts:24:3

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('.card').first()
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for locator('.card').first()

```

# Page snapshot

```yaml
- main [ref=e3]:
  - generic [ref=e4]:
    - generic [ref=e5]:
      - heading "Bem-vindo ao Outliers Lab" [level=1] [ref=e6]
      - paragraph [ref=e7]: Uma plataforma inovadora para análise e exploração de dados atípicos em datasets.
      - button "Começar análise" [ref=e8] [cursor=pointer]: Começar Análise
    - generic [ref=e9]:
      - heading "Funcionalidades Principais" [level=2] [ref=e10]
      - generic [ref=e11]:
        - generic [ref=e12]:
          - heading "Detecção Automática" [level=3] [ref=e13]
          - paragraph [ref=e14]: Identifique outliers automaticamente usando algoritmos avançados
        - generic [ref=e15]:
          - heading "Visualização" [level=3] [ref=e16]
          - paragraph [ref=e17]: Visualize dados e anomalias em gráficos interativos
        - generic [ref=e18]:
          - heading "Exportação" [level=3] [ref=e19]
          - paragraph [ref=e20]: Exporte relatórios e dados processados em múltiplos formatos
    - generic [ref=e21]:
      - heading "Pronto para começar?" [level=2] [ref=e22]
      - paragraph [ref=e23]: Cadastre-se agora e explore seus dados como nunca antes.
      - button "Criar conta gratuita" [ref=e24] [cursor=pointer]: Criar Conta Gratuita
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
> 27  |     await expect(heroSection).toBeVisible();
      |                               ^ Error: expect(locator).toBeVisible() failed
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
  90  |     await expect(errorTitle).toBeVisible();
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
```