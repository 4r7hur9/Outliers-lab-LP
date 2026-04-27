/**
 * Testes unitários — NaoEncontrado (404)
 *
 * Verifica a renderização e o link de retorno da página 404.
 */
import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import NaoEncontrado from '../paginas/NaoEncontrado/NaoEncontrado'

const renderizarPagina = () =>
  render(
    <BrowserRouter>
      <NaoEncontrado />
    </BrowserRouter>
  )

describe('NaoEncontrado (404)', () => {
  it('exibe o código 404', () => {
    renderizarPagina()
    expect(screen.getByText('404')).toBeInTheDocument()
  })

  it('exibe o título "Página não encontrada"', () => {
    renderizarPagina()
    expect(screen.getByRole('heading', { name: /página não encontrada/i })).toBeInTheDocument()
  })

  it('exibe o link de retorno para a página inicial', () => {
    renderizarPagina()
    const link = screen.getByRole('link', { name: /voltar para o início/i })
    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute('href', '/')
  })

  it('exibe mensagem de erro amigável', () => {
    renderizarPagina()
    expect(screen.getByText(/a página que você está procurando não existe/i)).toBeInTheDocument()
  })
})
