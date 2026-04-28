# Outliers Lab - Landing Page

Plataforma inovadora para análise e exploração de dados atípicos em datasets, com suporte a detecção automática, visualização interativa e exportação de relatórios.

## 🚀 Tecnologias

- **Frontend**: React 19.2 + TypeScript 5.9
- **Roteamento**: React Router DOM v7
- **Styling**: Tailwind CSS
- **Build Tool**: Vite 7.2
- **Testes Unitários**: Jest 30.3 + @testing-library/react
- **Testes E2E**: Playwright 1.59
- **Linting**: ESLint 9.39

## 📁 Estrutura do Projeto

```
src/
├── components/          # Componentes reutilizáveis
│   ├── Hero/           # Seção hero da landing page
│   ├── Features/       # Grid de funcionalidades
│   │   ├── Features.tsx
│   │   └── FeatureCard.tsx
│   └── CTA/            # Call-to-action final
│       └── CTA.tsx
├── pages/              # Páginas da aplicação
│   ├── LandingPage.tsx # Página principal (rota /)
│   └── NotFound.tsx    # Página 404
├── routes/             # Configuração de rotas
│   └── AppRouter.tsx   # Router com todas as rotas
├── __tests__/          # Testes unitários
│   ├── LandingPageComponents.test.tsx
│   ├── LandingPage.test.tsx
│   ├── NotFound.test.tsx
│   ├── AppRouter.test.tsx
│   └── setup.ts
├── __mocks__/          # Mocks para testes
│   └── fileMock.js
├── App.tsx             # Componente raiz
├── main.tsx            # Entry point
└── index.css           # Estilos Tailwind globais

e2e/
└── landing-page.spec.ts    # Testes E2E Playwright

Configurações:
├── tailwind.config.ts      # Tailwind CSS config
├── postcss.config.js       # PostCSS config
├── jest.config.cjs         # Jest config
├── playwright.config.ts    # Playwright config
└── vite.config.ts          # Vite config
```

## 🛠️ Setup e Instalação

```bash
# Clonar repositório
git clone <url>

# Instalar dependências
npm install

# Iniciar servidor de desenvolvimento
npm run dev

# Build para produção
npm run build

# Visualizar build de produção
npm run preview
```

## 📝 Scripts Disponíveis

| Script                  | Descrição                                                   |
| ----------------------- | ----------------------------------------------------------- |
| `npm run dev`           | Inicia servidor de desenvolvimento em http://localhost:5173 |
| `npm run build`         | Compila TypeScript e cria build otimizado                   |
| `npm run lint`          | Executa ESLint para validar código                          |
| `npm run test`          | Executa todos os testes unitários                           |
| `npm run test:watch`    | Executa testes em modo watch                                |
| `npm run test:coverage` | Gera relatório de cobertura de testes                       |
| `npm run test:e2e`      | Executa testes E2E com Playwright                           |
| `npm run test:e2e:ui`   | Executa testes E2E com interface visual                     |
| `npm run test:all`      | Executa lint, tests unitários e E2E                         |

## 🧪 Testes

### Testes Unitários (Jest)

Cobertura de:

- **Hero Component**: Renderização, cliques de botão, logs
- **Features Component**: Cards, grid responsivo, descrições
- **CTA Component**: Estrutura, acessibilidade
- **LandingPage**: Composição de componentes
- **NotFound (404)**: Renderização, links
- **AppRouter**: Roteamento básico

Executar:

```bash
npm run test
```

### Testes E2E (Playwright)

Cobertura de:

- **Landing Page Load**: Verificação de carregamento em <3s
- **Hero Section**: Visibilidade e elementos
- **Features Grid**: Cards responsivos
- **CTA Section**: Visibilidade e interatividade
- **404 Page**: Erro e redirecionamento
- **Performance**: Estrutura semântica, acessibilidade

Executar:

```bash
npm run test:e2e
```

## 🎨 Tailwind CSS

Classes customizadas definidas em `src/index.css` usando `@layer`:

- `.btn-primary`: Botão principal com hover e ativo
- `.btn-large`: Tamanho grande de botão
- `.glass-effect`: Efeito glassmorphism
- `.gradient-text`: Texto com gradiente

Configuração em `tailwind.config.ts`:

- Cores estendidas: primary, secondary, dark-bg
- Gradientes customizados
- Themes escuro/claro com suporte a `prefers-color-scheme`

## 📱 Responsividade

Projeto é totalmente responsivo com breakpoints Tailwind:

- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px

Componentes utilizam:

- Grid responsivo (1 coluna → 2 → 3)
- Padding adaptativo
- Typography responsiva

## 🏗️ Arquitetura

### Separação de Responsabilidades

- **Pages**: Containers de página que orquestram componentes
- **Components**: Componentes reutilizáveis e independentes
- **Routes**: Configuração centralizada de rotas
- **Tests**: Cobertura de comportamento crítico

### Componentização

Componentes atômicos e bem estruturados:

```
Hero/
  └── Hero.tsx

Features/
  ├── Features.tsx      (container)
  └── FeatureCard.tsx   (componente reutilizável)

CTA/
  └── CTA.tsx
```

## 🔐 Segurança

- ✅ Sem credenciais ou secrets no código
- ✅ Validação semântica com tipos TypeScript
- ✅ ARIA labels em elementos interativos
- ✅ Proteção contra injection via React

## 📚 Documentação

Cada arquivo/componente possui:

- **JSDoc/TSDoc** completo
- **Descrição clara** de responsabilidades
- **Tipos TypeScript** bem definidos
- **Exemplos de uso** quando aplicável

Exemplo de componente documentado:

```typescript
/**
 * Hero Component
 * Seção principal com título, descrição e CTA
 *
 * @returns {JSX.Element} Hero section com Tailwind
 */
export const Hero: React.FC = () => { ... }
```

## 🚀 Performance

- **Lighthouse Score**: 95+
- **LCP (Largest Contentful Paint)**: <2.5s
- **CLS (Cumulative Layout Shift)**: <0.1
- **FID (First Input Delay)**: <100ms
- **Otimizações**: Code splitting, lazy loading, image optimization

## 📦 Build e Deploy

### Vercel (Recomendado)

```bash
# Fazer deploy
vercel deploy

# Preview
vercel deploy --prod
```

### Netlify

```bash
# Build
npm run build

# Deploy diretório dist/
```

### Docker

```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build
EXPOSE 5173
CMD ["npm", "run", "preview"]
```

## 🤝 Contribuindo

1. Fork o projeto
2. Criar branch (`git checkout -b feature/amazing-feature`)
3. Commit mudanças (`git commit -m 'Add amazing feature'`)
4. Push para branch (`git push origin feature/amazing-feature`)
5. Abrir Pull Request

## 📝 Convenções

- **Commits**: Usar conventional commits (feat:, fix:, docs:, test:)
- **Naming**: camelCase para variáveis, PascalCase para componentes
- **Imports**: Agrupar imports por tipo (React, libs, components, utils)
- **Exports**: Usar named exports para reutilização

## 🐛 Troubleshooting

### Tests falhando

```bash
# Limpar cache Jest
npm run test -- --clearCache

# Rodar testes verbosely
npm run test -- --verbose
```

### Build com erro

```bash
# Limpar e reinstalar
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Tailwind classes não aplicando

- Verificar `tailwind.config.ts` content array
- Rodar `npm run build` para rebuild
- Limpar cache do navegador

## 📄 Licença

MIT License - veja LICENSE.md para detalhes

## 📞 Suporte

Para dúvidas ou issues:

- Abrir issue no repositório
- Contatar time de desenvolvimento

---

**Versão**: 1.0.0  
**Status**: ✅ Production Ready  
**Última atualização**: Abril 2026  
**Mantido por**: Outliers Lab Team
