/**
 * App — Componente raiz da aplicação Outliers Lab.
 *
 * Configura o roteamento com BrowserRouter e define o layout
 * principal: Navbar (fixa no topo) → conteúdo das páginas → Rodapé.
 */
import { BrowserRouter } from 'react-router-dom'
import { Rotas } from './rotas'
import Navbar from './componentes/Navbar/Navbar'
import Rodape from './componentes/Rodape/Rodape'
import './App.css'

/**
 * Componente App
 *
 * Layout base da aplicação. Toda navegação ocorre dentro do
 * BrowserRouter, garantindo que links e rotas funcionem corretamente.
 */
function App() {
  return (
    <BrowserRouter>
      {/* Barra de navegação fixa no topo */}
      <Navbar />

      {/* Conteúdo principal — alterado pelo roteador */}
      <main>
        <Rotas />
      </main>

      {/* Rodapé persistente em todas as páginas */}
      <Rodape />
    </BrowserRouter>
  )
}

export default App

