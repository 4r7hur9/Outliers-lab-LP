/**
 * Inicio — Página inicial (Home) da landing page.
 *
 * Combina todas as seções principais na ordem correta:
 * Hero → Sobre → Serviços → Depoimentos → Contato
 */
import Hero from '../../componentes/Hero/Hero'
import Sobre from '../../componentes/Sobre/Sobre'
import Servicos from '../../componentes/Servicos/Servicos'
import Depoimentos from '../../componentes/Depoimentos/Depoimentos'
import Contato from '../../componentes/Contato/Contato'

/**
 * Componente Inicio
 *
 * Página raiz da aplicação. Renderiza todas as seções
 * da landing page em sequência.
 */
export default function Inicio() {
  return (
    <>
      <Hero />
      <Sobre />
      <Servicos />
      <Depoimentos />
      <Contato />
    </>
  )
}
