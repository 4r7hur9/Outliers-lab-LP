/**
 * main.tsx — Ponto de entrada da aplicação Outliers Lab.
 *
 * Monta o componente raiz (App) no elemento #root do DOM.
 * O StrictMode ativa verificações extras durante o desenvolvimento.
 */
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
