/**
 * Testes unitários — Contato
 *
 * Verifica o formulário de contato: renderização, interação e envio.
 */
import { act, render, screen, fireEvent, waitFor } from '@testing-library/react'
import Contato from '../componentes/Contato/Contato'

describe('Contato', () => {
  beforeEach(() => {
    render(<Contato />)
  })

  it('exibe o título da seção "Entre em Contato"', () => {
    expect(screen.getByText(/entre em contato/i)).toBeInTheDocument()
  })

  it('exibe o formulário de contato', () => {
    expect(screen.getByRole('form', { name: /formulário de contato/i })).toBeInTheDocument()
  })

  it('exibe os campos do formulário', () => {
    expect(screen.getByLabelText(/nome completo/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/e-mail/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/mensagem/i)).toBeInTheDocument()
  })

  it('exibe o campo de seleção de serviço', () => {
    expect(screen.getByLabelText(/serviço de interesse/i)).toBeInTheDocument()
  })

  it('exibe o botão de envio', () => {
    expect(screen.getByRole('button', { name: /enviar mensagem/i })).toBeInTheDocument()
  })

  it('permite digitar no campo de nome', () => {
    const campoNome = screen.getByLabelText(/nome completo/i)
    fireEvent.change(campoNome, { target: { value: 'João Silva' } })
    expect(campoNome).toHaveValue('João Silva')
  })

  it('permite digitar no campo de e-mail', () => {
    const campoEmail = screen.getByLabelText(/e-mail/i)
    fireEvent.change(campoEmail, { target: { value: 'joao@email.com' } })
    expect(campoEmail).toHaveValue('joao@email.com')
  })

  it('exibe "Enviando..." ao submeter o formulário', async () => {
    // Preenche os campos obrigatórios
    fireEvent.change(screen.getByLabelText(/nome completo/i), {
      target: { value: 'João Silva' },
    })
    fireEvent.change(screen.getByLabelText(/e-mail/i), {
      target: { value: 'joao@email.com' },
    })
    fireEvent.change(screen.getByLabelText(/mensagem/i), {
      target: { value: 'Preciso de um projeto de dados.' },
    })

    // Submete o formulário
    fireEvent.submit(screen.getByRole('form', { name: /formulário de contato/i }))

    // Verifica estado de carregamento
    expect(screen.getByText(/enviando/i)).toBeInTheDocument()
  })

  it('exibe mensagem de sucesso após o envio', async () => {
    jest.useFakeTimers()

    fireEvent.change(screen.getByLabelText(/nome completo/i), {
      target: { value: 'Maria Santos' },
    })
    fireEvent.change(screen.getByLabelText(/e-mail/i), {
      target: { value: 'maria@email.com' },
    })
    fireEvent.change(screen.getByLabelText(/mensagem/i), {
      target: { value: 'Tenho interesse nos serviços.' },
    })

    fireEvent.submit(screen.getByRole('form', { name: /formulário de contato/i }))

    // Executa todos os timers pendentes (incluindo o setTimeout de 1500ms)
    await act(async () => {
      jest.runAllTimers()
    })

    jest.useRealTimers()

    await waitFor(() => {
      expect(screen.getByText(/mensagem enviada/i)).toBeInTheDocument()
    })
  })
})
