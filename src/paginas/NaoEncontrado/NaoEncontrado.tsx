/**
 * NaoEncontrado — Página 404.
 *
 * Exibida quando o usuário tenta acessar uma rota inexistente.
 * Rota: * (qualquer rota não mapeada)
 */
import { Link } from 'react-router-dom'
import './NaoEncontrado.css'

/**
 * Componente NaoEncontrado
 *
 * Renderiza uma página amigável de erro 404 com link de retorno.
 */
export default function NaoEncontrado() {
  return (
    <main className="nao-encontrado" aria-label="Página não encontrada">
      <div>
        <p className="nao-encontrado__codigo" aria-hidden="true">404</p>
        <h1 className="nao-encontrado__titulo">Página não encontrada</h1>
        <p className="nao-encontrado__descricao">
          Ops! A página que você está procurando não existe ou foi movida.
        </p>
        <Link to="/" className="nao-encontrado__btn">
          ← Voltar para o Início
        </Link>
      </div>
    </main>
  )
}
