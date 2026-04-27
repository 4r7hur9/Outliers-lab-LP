/**
 * ContatoPagina — Página dedicada de Contato.
 *
 * Exibe o formulário de contato em página própria, acessível via /contato.
 */
import Contato from '../../componentes/Contato/Contato'

/**
 * Componente ContatoPagina
 *
 * Rota: /contato
 */
export default function ContatoPagina() {
  return (
    <div style={{ paddingTop: '70px' }}>
      <Contato />
    </div>
  )
}
