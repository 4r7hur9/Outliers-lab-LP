/**
 * Testes unitários — Rodapé (Rodape)
 *
 * Verifica copyright, links e estrutura do rodapé.
 */
import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import Rodape from '../componentes/Rodape/Rodape'

const renderizarRodape = () =>
  render(
    <BrowserRouter>
      <Rodape />
    </BrowserRouter>
  )

describe('Rodape', () => {
  it('exibe o texto de copyright com o ano atual', () => {
    renderizarRodape()
    const anoAtual = new Date().getFullYear()
    expect(
      screen.getByText(new RegExp(`${anoAtual} Outliers Lab`, 'i'))
    ).toBeInTheDocument()
  })

  it('exibe "Todos os direitos reservados"', () => {
    renderizarRodape()
    expect(screen.getByText(/todos os direitos reservados/i)).toBeInTheDocument()
  })

  it('exibe o logotipo no rodapé', () => {
    renderizarRodape()
    expect(screen.getByLabelText('Outliers Lab - página inicial')).toBeInTheDocument()
  })

  it('exibe links de navegação institucionais', () => {
    renderizarRodape()
    expect(screen.getByText('Sobre Nós')).toBeInTheDocument()
    // "Serviços" aparece tanto como link quanto como título de coluna
    expect(screen.getAllByText('Serviços').length).toBeGreaterThanOrEqual(1)
  })

  it('exibe os títulos das colunas de links', () => {
    renderizarRodape()
    expect(screen.getByText('Empresa')).toBeInTheDocument()
    expect(screen.getByText('Contato')).toBeInTheDocument()
  })

  it('exibe links para redes sociais', () => {
    renderizarRodape()
    expect(screen.getByLabelText('LinkedIn')).toBeInTheDocument()
    expect(screen.getByLabelText('GitHub')).toBeInTheDocument()
  })

  it('possui role contentinfo acessível', () => {
    renderizarRodape()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })
})
