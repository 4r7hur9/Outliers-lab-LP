import './App.css'

function App() {
  return (
    <div className="page">
      {/* Navbar */}
      <header className="navbar">
        <div className="navbar-content">
          <span className="brand">Outliers Lab</span>
          <nav>
            <a href="#sobre">Sobre</a>
            <a href="#servicos">Serviços</a>
            <a href="#contato">Contato</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="hero">
        <h1>Transforme ideias em resultados extraordinários</h1>
        <p>
          O Outliers Lab conecta talentos, tecnologia e estratégia para criar
          soluções que fazem a diferença.
        </p>
        <a href="#contato" className="btn-primary">
          Fale com a gente
        </a>
      </section>

      {/* Sobre */}
      <section id="sobre" className="section">
        <h2>Sobre nós</h2>
        <p>
          Somos um laboratório de inovação focado em desenvolver produtos
          digitais de alta performance. Acreditamos que os melhores resultados
          surgem de pessoas e processos fora do comum — os verdadeiros
          <em> outliers</em>.
        </p>
      </section>

      {/* Serviços */}
      <section id="servicos" className="section section-alt">
        <h2>Serviços</h2>
        <div className="cards">
          <div className="card">
            <h3>Desenvolvimento Web</h3>
            <p>Aplicações modernas com React, TypeScript e as melhores práticas do mercado.</p>
          </div>
          <div className="card">
            <h3>Consultoria Técnica</h3>
            <p>Análise de arquitetura, code review e orientação para equipes de desenvolvimento.</p>
          </div>
          <div className="card">
            <h3>Produtos Digitais</h3>
            <p>Do conceito ao lançamento: UX, design e engenharia integrados.</p>
          </div>
        </div>
      </section>

      {/* Contato */}
      <section id="contato" className="section">
        <h2>Contato</h2>
        <p>Pronto para começar? Entre em contato conosco.</p>
        <a href="mailto:contato@outlierslab.com.br" className="btn-primary">
          contato@outlierslab.com.br
        </a>
      </section>

      {/* Rodapé */}
      <footer className="footer">
        <p>© {new Date().getFullYear()} Outliers Lab. Todos os direitos reservados.</p>
      </footer>
    </div>
  )
}

export default App
