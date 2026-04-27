/**
 * Testes unitários — Servicos
 *
 * Verifica que todos os serviços estão sendo renderizados corretamente.
 */
import { render, screen } from '@testing-library/react'
import Servicos from '../componentes/Servicos/Servicos'

describe('Servicos', () => {
  beforeEach(() => {
    render(<Servicos />)
  })

  it('exibe o título da seção "Nossos Serviços"', () => {
    expect(screen.getByText(/nossos serviços/i)).toBeInTheDocument()
  })

  it('exibe o card de Ciência de Dados', () => {
    expect(screen.getByText('Ciência de Dados')).toBeInTheDocument()
  })

  it('exibe o card de Inteligência Artificial', () => {
    expect(screen.getByText('Inteligência Artificial')).toBeInTheDocument()
  })

  it('exibe o card de Analytics & BI', () => {
    expect(screen.getByText('Analytics & BI')).toBeInTheDocument()
  })

  it('exibe o card de Engenharia de Dados', () => {
    expect(screen.getByText('Engenharia de Dados')).toBeInTheDocument()
  })

  it('exibe o card de Pesquisa & P&D', () => {
    expect(screen.getByText('Pesquisa & P&D')).toBeInTheDocument()
  })

  it('exibe o card de Consultoria & Treinamento', () => {
    expect(screen.getByText('Consultoria & Treinamento')).toBeInTheDocument()
  })

  it('exibe as tags de tecnologia no card de Ciência de Dados', () => {
    expect(screen.getByText('Python')).toBeInTheDocument()
    expect(screen.getByText('SQL')).toBeInTheDocument()
  })

  it('exibe 6 cards de serviço no total', () => {
    const cards = screen.getAllByRole('article')
    expect(cards).toHaveLength(6)
  })
})
