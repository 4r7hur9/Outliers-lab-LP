/**
 * Depoimentos — Seção com avaliações de clientes.
 *
 * Exibe cards com citação, nota em estrelas e dados do autor.
 */
import './Depoimentos.css'

/** Estrutura de um depoimento */
interface Depoimento {
  texto: string
  autor: string
  cargo: string
  empresa: string
  iniciais: string
  estrelas: number
}

/** Depoimentos reais de clientes */
const depoimentos: Depoimento[] = [
  {
    texto:
      'O Outliers Lab nos ajudou a reduzir em 40% o tempo de tomada de decisão com um dashboard personalizado. A equipe é extremamente técnica e comprometida com resultados.',
    autor: 'Ana Beatriz Costa',
    cargo: 'Diretora de Operações',
    empresa: 'LogisTech Brasil',
    iniciais: 'AB',
    estrelas: 5,
  },
  {
    texto:
      'Implementaram um modelo de churn prediction que aumentou nossa retenção em 25%. Comunicação clara, prazos cumpridos e qualidade técnica impecável.',
    autor: 'Carlos Mendes',
    cargo: 'Head de Produto',
    empresa: 'FinStart',
    iniciais: 'CM',
    estrelas: 5,
  },
  {
    texto:
      'A consultoria em DataOps transformou nosso pipeline de dados. De semanas para horas na atualização dos relatórios. Resultado extraordinário!',
    autor: 'Marina Oliveira',
    cargo: 'CTO',
    empresa: 'RetailPrime',
    iniciais: 'MO',
    estrelas: 5,
  },
]

/**
 * Componente Depoimentos
 *
 * Renderiza os cards de avaliação de clientes.
 */
export default function Depoimentos() {
  return (
    <section id="depoimentos" className="depoimentos secao" aria-label="Depoimentos de clientes">
      <div className="container">
        <h2 className="titulo-secao">O que Dizem Nossos Clientes</h2>
        <p className="subtitulo-secao">
          Resultados reais de quem transformou seus dados com o Outliers Lab.
        </p>

        <div className="depoimentos__grid">
          {depoimentos.map((dep) => (
            <article key={dep.autor} className="depoimentos__card">
              {/* Estrelas */}
              <div className="depoimentos__estrelas" aria-label={`${dep.estrelas} estrelas`}>
                {Array.from({ length: dep.estrelas }).map((_, i) => (
                  <span key={i} aria-hidden="true">⭐</span>
                ))}
              </div>

              {/* Texto do depoimento */}
              <blockquote className="depoimentos__texto">
                {dep.texto}
              </blockquote>

              {/* Autor */}
              <div className="depoimentos__autor">
                <div className="depoimentos__avatar" aria-hidden="true">
                  {dep.iniciais}
                </div>
                <div className="depoimentos__autor-info">
                  <strong>{dep.autor}</strong>
                  <span>{dep.cargo} — {dep.empresa}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
