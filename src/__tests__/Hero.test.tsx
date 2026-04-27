/**
 * Testes unitários — Hero
 *
 * Verifica a renderização do conteúdo principal da seção hero.
 */
import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import Hero from '../componentes/Hero/Hero'

const renderizarHero = () =>
  render(
    <BrowserRouter>
      <Hero />
    </BrowserRouter>
  )

describe('Hero', () => {
  it('exibe o título principal com "Dados em Decisões"', () => {
    renderizarHero()
    expect(screen.getByText(/dados em decisões/i)).toBeInTheDocument()
  })

  it('exibe o badge "Laboratório de Dados & IA"', () => {
    renderizarHero()
    expect(screen.getByText(/laboratório de dados/i)).toBeInTheDocument()
  })

  it('exibe o botão de CTA primário', () => {
    renderizarHero()
    expect(
      screen.getByRole('link', { name: /conheça nossos serviços/i })
    ).toBeInTheDocument()
  })

  it('exibe o botão secundário "Saiba Mais"', () => {
    renderizarHero()
    expect(
      screen.getByRole('link', { name: /saiba mais/i })
    ).toBeInTheDocument()
  })

  it('exibe as estatísticas da empresa', () => {
    renderizarHero()
    expect(screen.getByText(/projetos entregues/i)).toBeInTheDocument()
    expect(screen.getByText(/clientes satisfeitos/i)).toBeInTheDocument()
    expect(screen.getByText(/taxa de sucesso/i)).toBeInTheDocument()
  })

  it('o link primário aponta para /servicos', () => {
    renderizarHero()
    const link = screen.getByRole('link', { name: /conheça nossos serviços/i })
    expect(link).toHaveAttribute('href', '/servicos')
  })

  it('o link secundário aponta para /sobre', () => {
    renderizarHero()
    const link = screen.getByRole('link', { name: /saiba mais/i })
    expect(link).toHaveAttribute('href', '/sobre')
  })
})
