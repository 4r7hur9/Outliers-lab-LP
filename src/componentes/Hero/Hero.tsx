/**
 * Hero — Seção de destaque principal da landing page.
 *
 * Exibe o título principal, subtítulo, botões de ação e
 * estatísticas-chave da empresa.
 */
import { Link } from 'react-router-dom'
import './Hero.css'

/** Estatísticas exibidas na seção hero */
const estatisticas = [
  { numero: '+50', rotulo: 'Projetos Entregues' },
  { numero: '+30', rotulo: 'Clientes Satisfeitos' },
  { numero: '98%', rotulo: 'Taxa de Sucesso' },
  { numero: '5★', rotulo: 'Avaliação Média' },
]

/**
 * Componente Hero
 *
 * Primeira seção visível da landing page. Comunica o
 * posicionamento da marca e direciona o usuário para a
 * exploração dos serviços ou do contato.
 */
export default function Hero() {
  return (
    <section id="inicio" className="hero" aria-label="Apresentação">
      <div className="hero__container">
        {/* Badge de destaque */}
        <div className="hero__badge">
          <span className="hero__badge-ponto" aria-hidden="true" />
          Laboratório de Dados &amp; IA
        </div>

        {/* Título principal */}
        <h1 className="hero__titulo">
          Transformamos{' '}
          <span className="hero__titulo-destaque">Dados em Decisões</span>{' '}
          Estratégicas
        </h1>

        {/* Subtítulo */}
        <p className="hero__subtitulo">
          O Outliers Lab combina Ciência de Dados, Inteligência Artificial e
          Analytics avançado para levar sua empresa ao próximo nível. Do insight
          à ação, em cada projeto.
        </p>

        {/* Botões de ação */}
        <div className="hero__acoes">
          <Link to="/servicos" className="hero__btn-primario">
            Conheça Nossos Serviços
          </Link>
          <Link to="/sobre" className="hero__btn-secundario">
            Saiba Mais Sobre Nós
          </Link>
        </div>

        {/* Estatísticas */}
        <div className="hero__stats">
          {estatisticas.map((stat) => (
            <div key={stat.rotulo} className="hero__stat">
              <span className="hero__stat-numero">{stat.numero}</span>
              <span className="hero__stat-rotulo">{stat.rotulo}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Indicador de scroll */}
      <div className="hero__scroll" aria-hidden="true">
        <div className="hero__scroll-seta" />
        <span>Role para baixo</span>
      </div>
    </section>
  )
}
