/**
 * Testes unitários — Navbar
 *
 * Verifica a renderização e comportamento do componente de navegação.
 */
import { render, screen, fireEvent } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import Navbar from '../componentes/Navbar/Navbar'

/** Utilitário: renderiza o componente dentro do BrowserRouter */
const renderizarNavbar = () =>
  render(
    <BrowserRouter>
      <Navbar />
    </BrowserRouter>
  )

describe('Navbar', () => {
  it('renderiza o logotipo "Outliers Lab"', () => {
    renderizarNavbar()
    expect(screen.getByLabelText('Outliers Lab - página inicial')).toBeInTheDocument()
  })

  it('exibe os links de navegação principais', () => {
    renderizarNavbar()
    expect(screen.getByText('Início')).toBeInTheDocument()
    expect(screen.getByText('Sobre')).toBeInTheDocument()
    expect(screen.getByText('Serviços')).toBeInTheDocument()
    expect(screen.getByText('Contato')).toBeInTheDocument()
  })

  it('exibe o botão "Fale Conosco"', () => {
    renderizarNavbar()
    expect(screen.getByText('Fale Conosco')).toBeInTheDocument()
  })

  it('exibe o botão hambúrguer para mobile', () => {
    renderizarNavbar()
    const botaoHamburguer = screen.getByRole('button', { name: /abrir menu/i })
    expect(botaoHamburguer).toBeInTheDocument()
  })

  it('alterna a abertura do menu hambúrguer ao clicar', () => {
    renderizarNavbar()
    const botaoHamburguer = screen.getByRole('button', { name: /abrir menu/i })

    // Abre o menu
    fireEvent.click(botaoHamburguer)
    expect(screen.getByRole('button', { name: /fechar menu/i })).toBeInTheDocument()

    // Fecha o menu
    fireEvent.click(screen.getByRole('button', { name: /fechar menu/i }))
    expect(screen.getByRole('button', { name: /abrir menu/i })).toBeInTheDocument()
  })

  it('possui role de navegação acessível', () => {
    renderizarNavbar()
    expect(screen.getByRole('navigation')).toBeInTheDocument()
  })
})
