/**
 * SobrePagina — Página dedicada "Sobre Nós".
 *
 * Exibe a seção Sobre em página própria, acessível via /sobre.
 */
import Sobre from '../../componentes/Sobre/Sobre'

/**
 * Componente SobrePagina
 *
 * Rota: /sobre
 */
export default function SobrePagina() {
  return (
    <div style={{ paddingTop: '70px' }}>
      <Sobre />
    </div>
  )
}
