/**
 * Servicos — Seção de cards com os serviços oferecidos.
 *
 * Cada card exibe: ícone, título, descrição e tags de tecnologias.
 */
import './Servicos.css'

/** Definição de cada serviço oferecido pela empresa */
interface Servico {
  icone: string
  titulo: string
  descricao: string
  tags: string[]
}

/** Lista de serviços do Outliers Lab */
const servicos: Servico[] = [
  {
    icone: '📊',
    titulo: 'Ciência de Dados',
    descricao:
      'Transformamos grandes volumes de dados brutos em insights acionáveis, usando análise exploratória, modelagem estatística e machine learning.',
    tags: ['Python', 'R', 'SQL', 'Pandas', 'Scikit-learn'],
  },
  {
    icone: '🤖',
    titulo: 'Inteligência Artificial',
    descricao:
      'Desenvolvemos modelos de IA sob medida — de NLP e visão computacional a sistemas de recomendação e automação inteligente.',
    tags: ['TensorFlow', 'PyTorch', 'LLMs', 'OpenCV', 'MLflow'],
  },
  {
    icone: '📈',
    titulo: 'Analytics & BI',
    descricao:
      'Criamos dashboards executivos e pipelines analíticos para que sua equipe tome decisões baseadas em dados em tempo real.',
    tags: ['Power BI', 'Tableau', 'Looker', 'dbt', 'BigQuery'],
  },
  {
    icone: '🏗️',
    titulo: 'Engenharia de Dados',
    descricao:
      'Projetamos e mantemos infraestruturas de dados escaláveis — data lakes, pipelines ETL/ELT e arquiteturas de streaming.',
    tags: ['Spark', 'Airflow', 'Kafka', 'Snowflake', 'AWS'],
  },
  {
    icone: '🔬',
    titulo: 'Pesquisa & P&D',
    descricao:
      'Conduzimos pesquisas aplicadas para desenvolver algoritmos proprietários e soluções inovadoras para problemas de negócio complexos.',
    tags: ['Research', 'Papers', 'PoC', 'Prototipagem'],
  },
  {
    icone: '🎓',
    titulo: 'Consultoria & Treinamento',
    descricao:
      'Capacitamos equipes internas em cultura data-driven, desde fundamentos de análise de dados até arquiteturas modernas de ML.',
    tags: ['Workshops', 'Mentoria', 'Roadmap', 'DataOps'],
  },
]

/**
 * Componente Servicos
 *
 * Renderiza o grid de serviços como um conjunto de cards interativos.
 */
export default function Servicos() {
  return (
    <section id="servicos" className="servicos secao" aria-label="Nossos serviços">
      <div className="container">
        <h2 className="titulo-secao">Nossos Serviços</h2>
        <p className="subtitulo-secao">
          Soluções completas em dados e IA, do problema ao produto.
        </p>

        <div className="servicos__grid">
          {servicos.map((servico) => (
            <article key={servico.titulo} className="servicos__card">
              <span className="servicos__card-icone" aria-hidden="true">
                {servico.icone}
              </span>
              <h3 className="servicos__card-titulo">{servico.titulo}</h3>
              <p className="servicos__card-descricao">{servico.descricao}</p>
              <div className="servicos__card-tags" aria-label="Tecnologias">
                {servico.tags.map((tag) => (
                  <span key={tag} className="servicos__tag">
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
