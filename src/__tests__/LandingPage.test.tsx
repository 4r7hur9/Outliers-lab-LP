import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import LandingPage from "../pages/LandingPage";

/**
 * Testes para LandingPage Component
 * Valida renderização de todos os componentes da página principal
 */
describe("LandingPage", () => {
  const renderWithRouter = (component: React.ReactElement) => {
    return render(<MemoryRouter>{component}</MemoryRouter>);
  };

  it("deve renderizar Hero com seções principais", () => {
    renderWithRouter(<LandingPage />);

    // Verifica Hero section via data-testid
    expect(screen.getByTestId("hero-section")).toBeInTheDocument();

    // Verifica Features via data-testid dos cards
    expect(screen.getAllByTestId(/feature-card/).length).toBeGreaterThanOrEqual(
      1,
    );

    // Verifica CTA via data-testid
    expect(screen.getByTestId("cta-section")).toBeInTheDocument();
  });

  it("deve estar dentro de uma tag main", () => {
    const { container } = renderWithRouter(<LandingPage />);
    const mainElement = container.querySelector("main");

    expect(mainElement).toBeInTheDocument();
  });

  it("deve renderizar múltiplos botões de ação", () => {
    renderWithRouter(<LandingPage />);
    const buttons = screen.getAllByRole("button");

    // Múltiplos botões na página
    expect(buttons.length).toBeGreaterThanOrEqual(3);
  });
});
