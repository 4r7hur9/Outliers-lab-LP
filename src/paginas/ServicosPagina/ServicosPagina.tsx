/**
 * ServicosPagina — Página dedicada de Serviços.
 *
 * Exibe a seção Serviços em página própria, acessível via /servicos.
 */
import Servicos from '../../componentes/Servicos/Servicos'

/**
 * Componente ServicosPagina
 *
 * Rota: /servicos
 */
export default function ServicosPagina() {
  return (
    <div style={{ paddingTop: '70px' }}>
      <Servicos />
    </div>
  )
}
