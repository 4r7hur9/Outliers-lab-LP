/**
 * Contato — Seção de formulário e informações de contato.
 *
 * Gerencia o estado do formulário (campos, envio, sucesso)
 * e exibe as informações de contato da empresa.
 */
import { useState, type FormEvent } from 'react'
import './Contato.css'

/** Dados do formulário de contato */
interface DadosFormulario {
  nome: string
  email: string
  servico: string
  mensagem: string
}

/** Opções de serviço para o campo select */
const opcoeServico = [
  { valor: '', rotulo: 'Selecione um serviço' },
  { valor: 'ciencia-de-dados', rotulo: 'Ciência de Dados' },
  { valor: 'inteligencia-artificial', rotulo: 'Inteligência Artificial' },
  { valor: 'analytics-bi', rotulo: 'Analytics & BI' },
  { valor: 'engenharia-de-dados', rotulo: 'Engenharia de Dados' },
  { valor: 'consultoria', rotulo: 'Consultoria & Treinamento' },
  { valor: 'outro', rotulo: 'Outro' },
]

/** Estado inicial do formulário */
const estadoInicial: DadosFormulario = {
  nome: '',
  email: '',
  servico: '',
  mensagem: '',
}

/**
 * Componente Contato
 *
 * Renderiza o formulário de contato com validação básica e
 * as informações de contato e redes sociais da empresa.
 */
export default function Contato() {
  const [dados, setDados] = useState<DadosFormulario>(estadoInicial)
  const [enviando, setEnviando] = useState(false)
  const [enviado, setEnviado] = useState(false)

  /** Atualiza o campo correspondente no estado */
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setDados((prev) => ({ ...prev, [name]: value }))
  }

  /** Simula o envio do formulário */
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    setEnviando(true)

    // Simulação de requisição assíncrona (substituir por chamada real à API)
    setTimeout(() => {
      setEnviando(false)
      setEnviado(true)
    }, 1500)
  }

  return (
    <section id="contato" className="contato secao" aria-label="Entre em contato">
      <div className="container">
        <h2 className="titulo-secao">Entre em Contato</h2>
        <p className="subtitulo-secao">
          Pronto para transformar seus dados? Fale com nossos especialistas.
        </p>

        <div className="contato__grid">
          {/* Informações de contato */}
          <div className="contato__info">
            <div className="contato__info-item">
              <div className="contato__info-icone" aria-hidden="true">📧</div>
              <div className="contato__info-texto">
                <strong>E-mail</strong>
                <span>contato@outlierslab.com.br</span>
              </div>
            </div>

            <div className="contato__info-item">
              <div className="contato__info-icone" aria-hidden="true">📍</div>
              <div className="contato__info-texto">
                <strong>Localização</strong>
                <span>São Paulo, SP — Atendimento remoto em todo o Brasil</span>
              </div>
            </div>

            <div className="contato__info-item">
              <div className="contato__info-icone" aria-hidden="true">⏰</div>
              <div className="contato__info-texto">
                <strong>Horário de Atendimento</strong>
                <span>Segunda a Sexta, 09h–18h (BRT)</span>
              </div>
            </div>

            {/* Redes sociais */}
            <div className="contato__redes">
              <h3>Nos siga nas redes</h3>
              <div className="contato__redes-links">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contato__rede-link"
                  aria-label="LinkedIn do Outliers Lab"
                >
                  💼 LinkedIn
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contato__rede-link"
                  aria-label="GitHub do Outliers Lab"
                >
                  🐙 GitHub
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contato__rede-link"
                  aria-label="Instagram do Outliers Lab"
                >
                  📸 Instagram
                </a>
              </div>
            </div>
          </div>

          {/* Formulário */}
          <div className="contato__formulario">
            {enviado ? (
              /* Mensagem de sucesso */
              <div className="contato__sucesso" role="alert">
                <span className="contato__sucesso-icone">✅</span>
                <h3>Mensagem Enviada!</h3>
                <p>
                  Obrigado, {dados.nome}! Nossa equipe entrará em contato em
                  até 1 dia útil.
                </p>
              </div>
            ) : (
              /* Formulário de contato */
              <>
                <h3>Envie uma Mensagem</h3>
                <form onSubmit={handleSubmit} noValidate aria-label="Formulário de contato">
                  <div className="contato__campo">
                    <label htmlFor="contato-nome">Nome completo *</label>
                    <input
                      id="contato-nome"
                      type="text"
                      name="nome"
                      value={dados.nome}
                      onChange={handleChange}
                      placeholder="Seu nome"
                      required
                      minLength={3}
                    />
                  </div>

                  <div className="contato__campo">
                    <label htmlFor="contato-email">E-mail *</label>
                    <input
                      id="contato-email"
                      type="email"
                      name="email"
                      value={dados.email}
                      onChange={handleChange}
                      placeholder="seu@email.com"
                      required
                    />
                  </div>

                  <div className="contato__campo">
                    <label htmlFor="contato-servico">Serviço de interesse</label>
                    <select
                      id="contato-servico"
                      name="servico"
                      value={dados.servico}
                      onChange={handleChange}
                    >
                      {opcoeServico.map((opcao) => (
                        <option key={opcao.valor} value={opcao.valor}>
                          {opcao.rotulo}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="contato__campo">
                    <label htmlFor="contato-mensagem">Mensagem *</label>
                    <textarea
                      id="contato-mensagem"
                      name="mensagem"
                      value={dados.mensagem}
                      onChange={handleChange}
                      placeholder="Descreva seu projeto ou necessidade..."
                      rows={5}
                      required
                      minLength={10}
                    />
                  </div>

                  <button
                    type="submit"
                    className="contato__btn-enviar"
                    disabled={enviando}
                  >
                    {enviando ? 'Enviando...' : 'Enviar Mensagem'}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
