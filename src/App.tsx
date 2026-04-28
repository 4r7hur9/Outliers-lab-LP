import AppRouter from "./routes/AppRouter";

/**
 * App Component
 * Componente raiz da aplicação
 * Renderiza o router com todas as rotas configuradas
 *
 * Responsabilidades:
 * - Envolver a aplicação com BrowserRouter (em AppRouter)
 * - Gerenciar navegação entre páginas
 *
 * @returns {JSX.Element} Componente App com roteamento
 */
function App() {
  return <AppRouter />;
}

export default App;
