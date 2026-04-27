/**
 * Sobre — Seção de apresentação da empresa.
 *
 * Exibe a história, missão e valores do Outliers Lab.
 * Dividida em: bloco textual + visual + cards de valores.
 */
import './Sobre.css'

/** Itens do painel visual (tecnologias/ferramentas usadas) */
const itensVisuais = [
  { icone: '📊', titulo: 'Analytics Avançado', descricao: 'Power BI, Tableau, Looker' },
  { icone: '🤖', titulo: 'Inteligência Artificial', descricao: 'Machine Learning & Deep Learning' },
  { icone: '🐍', titulo: 'Stack Científica', descricao: 'Python, R, Spark, SQL' },
  { icone: '☁️', titulo: 'Cloud & DataOps', descricao: 'AWS, GCP, Azure, Airflow' },
]

/** Valores centrais da empresa */
const valores = [
  {
    emoji: '💡',
    titulo: 'Inovação',
    descricao:
      'Buscamos constantemente novas abordagens e tecnologias de ponta para resolver problemas complexos.',
  },
  {
    emoji: '🎯',
    titulo: 'Precisão',
    descricao:
      'Cada análise é conduzida com rigor científico, garantindo resultados confiáveis e reproduzíveis.',
  },
  {
    emoji: '🚀',
    titulo: 'Impacto',
    descricao:
      'Nosso foco está nos resultados reais: decisões mais inteligentes e negócios mais eficientes.',
  },
]

/**
 * Componente Sobre
 *
 * Apresenta a empresa, seu stack tecnológico e valores.
 */
export default function Sobre() {
  return (
    <section id="sobre" className="sobre secao" aria-label="Sobre nós">
      <div className="container">
        {/* Cabeçalho da seção */}
        <h2 className="titulo-secao">Sobre Nós</h2>
        <p className="subtitulo-secao">
          Conheça quem está por trás dos dados que transformam negócios.
        </p>

        {/* Grade: texto + visual */}
        <div className="sobre__grid">
          {/* Bloco de texto */}
          <div className="sobre__texto">
            <span className="sobre__texto-rotulo">Nossa História</span>
            <h2>
              Nascemos para <span>descomplicar</span> o poder dos dados
            </h2>
            <p className="sobre__descricao">
              O <strong>Outliers Lab</strong> é um laboratório especializado em
              Ciência de Dados e Inteligência Artificial, fundado com a missão de
              democratizar o acesso a soluções analíticas de alto impacto.
            </p>
            <p className="sobre__descricao">
              Reunimos cientistas de dados, engenheiros e especialistas de negócio
              para entregar projetos end-to-end — desde a coleta e tratamento de
              dados até modelos em produção e dashboards executivos.
            </p>
          </div>

          {/* Painel visual de tecnologias */}
          <div className="sobre__visual" aria-label="Stack tecnológico">
            {itensVisuais.map((item) => (
              <div key={item.titulo} className="sobre__visual-item">
                <div className="sobre__visual-icone" aria-hidden="true">
                  {item.icone}
                </div>
                <div className="sobre__visual-info">
                  <strong>{item.titulo}</strong>
                  <span>{item.descricao}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Cards de valores */}
        <div className="sobre__valores">
          {valores.map((valor) => (
            <article key={valor.titulo} className="sobre__valor-card">
              <span className="sobre__valor-emoji" aria-hidden="true">
                {valor.emoji}
              </span>
              <h3>{valor.titulo}</h3>
              <p>{valor.descricao}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
