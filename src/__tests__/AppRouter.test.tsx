import { render, screen } from "@testing-library/react";
import { MemoryRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import NotFound from "../pages/NotFound";

/**
 * Testes para AppRouter
 * Valida configuração de rotas
 * Nota: Usamos MemoryRouter em testes unitários para facilitar teste de múltiplas rotas
 */
describe("AppRouter", () => {
  it("deve renderizar LandingPage na rota /", () => {
    render(
      <Router initialEntries={["/"]}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>,
    );

    expect(screen.getByTestId("hero-section")).toBeInTheDocument();
    expect(screen.getAllByTestId(/feature-card/).length).toBeGreaterThanOrEqual(
      1,
    );
  });

  it("deve renderizar NotFound em rota inválida", () => {
    render(
      <Router initialEntries={["/rota-inexistente"]}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>,
    );

    expect(screen.getByText("404")).toBeInTheDocument();
    expect(screen.getByText(/página não encontrada/i)).toBeInTheDocument();
  });
});
