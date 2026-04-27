# Outliers Lab — Landing Page

Landing page oficial do **Outliers Lab**, laboratório especializado em Ciência de Dados e Inteligência Artificial.

## 🚀 Tecnologias

- **React 19** + **TypeScript** — Interface moderna e tipada
- **Vite 7** — Build tool ultrarrápido com HMR
- **React Router DOM 7** — Roteamento client-side
- **Jest 30** + **Testing Library** — Testes unitários
- **Playwright** — Testes E2E (End-to-End)

---

## 📁 Estrutura do Projeto

```
src/
  componentes/          # Componentes reutilizáveis
    Navbar/             # Barra de navegação (responsiva)
    Hero/               # Seção principal de destaque
    Sobre/              # Seção Sobre Nós
    Servicos/           # Grid de serviços
    Depoimentos/        # Depoimentos de clientes
    Contato/            # Formulário de contato
    Rodape/             # Rodapé da página
  paginas/              # Páginas da aplicação
    Inicio/             # Página inicial (todas as seções)
    SobrePagina/        # Página dedicada /sobre
    ServicosPagina/     # Página dedicada /servicos
    ContatoPagina/      # Página dedicada /contato
    NaoEncontrado/      # Página 404
  rotas/                # Configuração de rotas
    index.tsx           # Definição de todas as rotas
  __tests__/            # Testes unitários (Jest)
e2e/                    # Testes E2E (Playwright)
```

---

## 🗺️ Rotas

| Caminho       | Página             | Descrição                          |
|---------------|--------------------|------------------------------------|
| `/`           | Início             | Landing page completa              |
| `/sobre`      | Sobre Nós          | História, missão e valores         |
| `/servicos`   | Serviços           | Catálogo de serviços               |
| `/contato`    | Contato            | Formulário e informações           |
| `*`           | 404                | Página não encontrada              |

---

## ⚙️ Instalação e Uso

```bash
# Instalar dependências
npm install

# Iniciar servidor de desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview do build
npm run preview
```

---

## 🧪 Testes

### Testes Unitários (Jest + Testing Library)

```bash
# Executar todos os testes unitários
npm test

# Modo watch (re-executa ao salvar)
npm run test:watch

# Relatório de cobertura
npm run test:coverage
```

Cobertura atual: **42 testes** em 6 arquivos de teste.

### Testes E2E (Playwright)

```bash
# Instalar browsers (primeira vez)
npx playwright install

# Executar testes E2E
npm run test:e2e

# Interface visual do Playwright
npm run test:e2e:ui
```

Cobertura atual: **17 testes** em 3 arquivos de teste.

---

## 🧹 Lint

```bash
npm run lint
```

---

## 📐 Design System

O projeto utiliza variáveis CSS personalizadas definidas em `src/index.css`:

- **Cores principais**: `--cor-primaria` (#6366f1), `--cor-secundaria` (#8b5cf6)
- **Fundo escuro**: `--cor-fundo` (#0f0f1a)
- **Tipografia**: Inter / system-ui

---

## 📝 Licença

© 2025 Outliers Lab. Todos os direitos reservados.

