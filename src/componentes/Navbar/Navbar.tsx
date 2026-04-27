/**
 * Navbar — Barra de navegação principal da aplicação.
 *
 * Exibe o logotipo e links para as seções/páginas.
 * Em dispositivos móveis, colapsa em menu hambúrguer.
 */
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'

/** Links da navegação principal */
const linksNavegacao = [
  { rotulo: 'Início', caminho: '/' },
  { rotulo: 'Sobre', caminho: '/sobre' },
  { rotulo: 'Serviços', caminho: '/servicos' },
  { rotulo: 'Contato', caminho: '/contato' },
]

/**
 * Componente Navbar
 *
 * Renderiza a barra de navegação fixa no topo da página.
 * Gerencia o estado de abertura/fechamento do menu mobile.
 */
export default function Navbar() {
  const [menuAberto, setMenuAberto] = useState(false)

  /** Alterna o estado do menu hambúrguer */
  const alternarMenu = () => setMenuAberto((prev) => !prev)

  /** Fecha o menu ao clicar em um link (mobile) */
  const fecharMenu = () => setMenuAberto(false)

  return (
    <nav className="navbar" role="navigation" aria-label="Navegação principal">
      <div className="navbar__container">
        {/* Logotipo */}
        <NavLink to="/" className="navbar__logo" onClick={fecharMenu} aria-label="Outliers Lab - página inicial">
          <img
            src="/outliers.svg"
            alt="Ícone Outliers Lab"
            className="navbar__logo-icone"
            width={36}
            height={36}
          />
          <span className="navbar__logo-texto">
            Outliers <span>Lab</span>
          </span>
        </NavLink>

        {/* Links de navegação */}
        <ul
          className={`navbar__links${menuAberto ? ' navbar__links--aberto' : ''}`}
          role="list"
        >
          {linksNavegacao.map((link) => (
            <li key={link.caminho}>
              <NavLink
                to={link.caminho}
                end={link.caminho === '/'}
                className={({ isActive }) => (isActive ? 'ativo' : '')}
                onClick={fecharMenu}
              >
                {link.rotulo}
              </NavLink>
            </li>
          ))}
          <li>
            <NavLink to="/contato" className="navbar__cta" onClick={fecharMenu}>
              Fale Conosco
            </NavLink>
          </li>
        </ul>

        {/* Botão hambúrguer (mobile) */}
        <button
          className={`navbar__hamburguer${menuAberto ? ' navbar__hamburguer--aberto' : ''}`}
          onClick={alternarMenu}
          aria-expanded={menuAberto}
          aria-label={menuAberto ? 'Fechar menu' : 'Abrir menu'}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </nav>
  )
}
