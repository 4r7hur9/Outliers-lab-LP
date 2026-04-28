/**
 * NotFound Component (404 Page)
 * Página exibida quando usuário acessa rota inexistente
 * Oferece link de retorno à página inicial
 *
 * @returns {JSX.Element} Página 404 com opção de retorno à home
 */
const NotFound = () => {
  return (
    <main className="w-full min-h-screen flex items-center justify-center p-4 bg-gradient-to-b from-dark-bg via-dark-secondary to-dark-bg pt-20">
      <div className="glass-effect border-2 border-secondary p-12 text-center max-w-md rounded-xl">
        <div className="text-8xl font-bold bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent mb-6">
          404
        </div>
        <h2 className="text-3xl font-bold text-white mb-4">
          Página não encontrada
        </h2>
        <p className="text-gray-300 mb-8 text-lg">
          Desculpe, a página que você está procurando não existe. Talvez tenha
          sido movida ou deletada.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="/"
            className="btn-primary flex-1"
            aria-label="Voltar para a página inicial"
          >
            Voltar para Home
          </a>
          <a
            href="/contato"
            className="flex-1 px-6 py-3 rounded-lg font-semibold text-white border-2 border-secondary hover:bg-secondary/10 transition-colors"
            aria-label="Contatar suporte"
          >
            Contato
          </a>
        </div>
      </div>
    </main>
  );
};

export default NotFound;
