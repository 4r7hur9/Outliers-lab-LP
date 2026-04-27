/**
 * Rotas — Configuração central de roteamento da aplicação.
 *
 * Define todas as rotas públicas usando React Router v6.
 * Cada rota mapeia um caminho URL para um componente de página.
 *
 * Rotas disponíveis:
 * - /          → Página Inicial (landing page completa)
 * - /sobre     → Página Sobre Nós
 * - /servicos  → Página de Serviços
 * - /contato   → Página de Contato
 * - *          → Página 404 (rota não encontrada)
 */
import { Routes, Route } from 'react-router-dom'
import Inicio from '../paginas/Inicio/Inicio'
import SobrePagina from '../paginas/SobrePagina/SobrePagina'
import ServicosPagina from '../paginas/ServicosPagina/ServicosPagina'
import ContatoPagina from '../paginas/ContatoPagina/ContatoPagina'
import NaoEncontrado from '../paginas/NaoEncontrado/NaoEncontrado'

/**
 * Componente Rotas
 *
 * Encapsula todas as definições de rota da aplicação.
 * Deve ser renderizado dentro de um <BrowserRouter>.
 */
export function Rotas() {
  return (
    <Routes>
      {/* Página inicial — landing page completa */}
      <Route path="/" element={<Inicio />} />

      {/* Página Sobre Nós */}
      <Route path="/sobre" element={<SobrePagina />} />

      {/* Página de Serviços */}
      <Route path="/servicos" element={<ServicosPagina />} />

      {/* Página de Contato */}
      <Route path="/contato" element={<ContatoPagina />} />

      {/* Rota catch-all — 404 */}
      <Route path="*" element={<NaoEncontrado />} />
    </Routes>
  )
}
