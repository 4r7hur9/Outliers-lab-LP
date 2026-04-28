import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import RecursosPage from "../pages/RecursosPage";
import SobrePage from "../pages/SobrePage";
import ContatoPage from "../pages/ContatoPage";
import CadastroPage from "../pages/CadastroPage";
import NotFound from "../pages/NotFound";
import Navbar from "../components/Navbar/Navbar";

/**
 * AppRouter Component
 * Define todas as rotas da aplicação com Navbar persistente
 * Rotas:
 * - "/" : LandingPage (home)
 * - "/recursos" : RecursosPage (features detalhadas)
 * - "/sobre" : SobrePage (about)
 * - "/contato" : ContatoPage (contact)
 * - "/cadastro" : CadastroPage (signup)
 * - "*" : NotFound (404)
 *
 * @returns {JSX.Element} Router com Navbar e todas as rotas configuradas
 */
export const AppRouter: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Rotas da aplicação */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/recursos" element={<RecursosPage />} />
        <Route path="/sobre" element={<SobrePage />} />
        <Route path="/contato" element={<ContatoPage />} />
        <Route path="/cadastro" element={<CadastroPage />} />

        {/* Rota 404 - Página não encontrada */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
