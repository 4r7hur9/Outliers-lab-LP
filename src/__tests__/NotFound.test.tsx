import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import NotFound from "../pages/NotFound";

/**
 * Testes para NotFound Component (404)
 * Valida renderização da página de erro
 */
describe("NotFound (404)", () => {
  const renderWithRouter = (component: React.ReactElement) => {
    return render(<MemoryRouter>{component}</MemoryRouter>);
  };

  it("deve renderizar mensagem de erro 404", () => {
    renderWithRouter(<NotFound />);

    expect(screen.getByText("404")).toBeInTheDocument();
    expect(screen.getByText(/página não encontrada/i)).toBeInTheDocument();
  });

  it("deve renderizar descrição de erro", () => {
    renderWithRouter(<NotFound />);

    expect(
      screen.getByText(/desculpe, a página que você está procurando/i),
    ).toBeInTheDocument();
  });

  it("deve renderizar link de retorno à home", () => {
    renderWithRouter(<NotFound />);
    const link = screen.getByText("Voltar para Home");

    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", "/");
  });

  it("deve estar dentro de uma tag main", () => {
    const { container } = renderWithRouter(<NotFound />);
    const mainElement = container.querySelector("main");

    expect(mainElement).toBeInTheDocument();
  });
});
