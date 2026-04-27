/**
 * Rodape — Rodapé da aplicação.
 *
 * Exibe links institucionais, redes sociais e copyright.
 */
import { Link } from 'react-router-dom'
import './Rodape.css'

/** Colunas de links do rodapé */
const colunasLinks = [
  {
    titulo: 'Empresa',
    links: [
      { rotulo: 'Sobre Nós', caminho: '/sobre' },
      { rotulo: 'Serviços', caminho: '/servicos' },
      { rotulo: 'Casos de Uso', caminho: '/servicos' },
      { rotulo: 'Blog', caminho: '/' },
    ],
  },
  {
    titulo: 'Serviços',
    links: [
      { rotulo: 'Ciência de Dados', caminho: '/servicos' },
      { rotulo: 'Inteligência Artificial', caminho: '/servicos' },
      { rotulo: 'Analytics & BI', caminho: '/servicos' },
      { rotulo: 'Consultoria', caminho: '/servicos' },
    ],
  },
  {
    titulo: 'Contato',
    links: [
      { rotulo: 'Fale Conosco', caminho: '/contato' },
      { rotulo: 'Suporte', caminho: '/contato' },
      { rotulo: 'Parcerias', caminho: '/contato' },
    ],
  },
]

/** Redes sociais */
const redesSociais = [
  { icone: '💼', href: 'https://linkedin.com', label: 'LinkedIn' },
  { icone: '🐙', href: 'https://github.com', label: 'GitHub' },
  { icone: '📸', href: 'https://instagram.com', label: 'Instagram' },
  { icone: '🐦', href: 'https://twitter.com', label: 'Twitter' },
]

/** Ano atual para o copyright */
const anoAtual = new Date().getFullYear()

/**
 * Componente Rodape
 *
 * Renderiza o rodapé completo com marca, links e copyright.
 */
export default function Rodape() {
  return (
    <footer className="rodape" role="contentinfo">
      <div className="container">
        <div className="rodape__grid">
          {/* Coluna da marca */}
          <div className="rodape__marca">
            <Link to="/" className="rodape__logo" aria-label="Outliers Lab - página inicial">
              <img src="/outliers.svg" alt="Ícone Outliers Lab" width={32} height={32} />
              Outliers <span>Lab</span>
            </Link>

            <p className="rodape__descricao">
              Laboratório especializado em Ciência de Dados e IA. Transformamos
              dados em estratégias que impulsionam negócios.
            </p>

            {/* Redes sociais */}
            <div className="rodape__redes" aria-label="Redes sociais">
              {redesSociais.map((rede) => (
                <a
                  key={rede.label}
                  href={rede.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rodape__rede"
                  aria-label={rede.label}
                >
                  {rede.icone}
                </a>
              ))}
            </div>
          </div>

          {/* Colunas de links */}
          {colunasLinks.map((coluna) => (
            <div key={coluna.titulo} className="rodape__coluna">
              <h4>{coluna.titulo}</h4>
              <ul className="rodape__links" role="list">
                {coluna.links.map((link) => (
                  <li key={link.rotulo}>
                    <Link to={link.caminho}>{link.rotulo}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Separador e copyright */}
        <hr className="rodape__separador" />
        <div className="rodape__copyright">
          <p>
            © {anoAtual} Outliers Lab. Todos os direitos reservados.
          </p>
          <div className="rodape__copyright-links">
            <Link to="/">Política de Privacidade</Link>
            <Link to="/">Termos de Uso</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
