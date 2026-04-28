import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Hero } from "../components/Hero/Hero";
import { Features } from "../components/Features/Features";
import { CTA } from "../components/CTA/CTA";

// Wrapper para envolver componentes com BrowserRouter
const renderWithRouter = (component: React.ReactElement) => {
  return render(<BrowserRouter>{component}</BrowserRouter>);
};

/**
 * Testes para Hero Component
 * Valida renderização e comportamento da hero section
 */
describe("Hero Component", () => {
  it("deve renderizar o título principal", () => {
    renderWithRouter(<Hero />);

    expect(screen.getByText(/detecte anomalias/i)).toBeInTheDocument();
    expect(screen.getByText(/com precisão/i)).toBeInTheDocument();
  });

  it("deve renderizar botões de ação", () => {
    renderWithRouter(<Hero />);
    const buttons = screen.getAllByRole("button");

    // Deve ter pelo menos 2 botões (Começar e Saiba Mais)
    expect(buttons.length).toBeGreaterThanOrEqual(2);
  });

  it("deve renderizar stats de acurácia", () => {
    renderWithRouter(<Hero />);

    // Labels são texto estático, valores animam via requestAnimationFrame
    const statCards = screen.getAllByTestId("stat-card");
    expect(statCards).toHaveLength(3);
    expect(screen.getByText(/acurácia/i)).toBeInTheDocument();
  });
});

/**
 * Testes para Features Component
 * Valida exibição das funcionalidades principais
 */
describe("Features Component", () => {
  it("deve renderizar a grid de features", () => {
    renderWithRouter(<Features />);

    const featureCards = screen.getAllByTestId(/feature-card/);
    expect(featureCards).toHaveLength(3);
  });

  it("deve renderizar todas as features", () => {
    renderWithRouter(<Features />);

    expect(screen.getByText(/detecção inteligente/i)).toBeInTheDocument();
    expect(screen.getByText(/análise em tempo real/i)).toBeInTheDocument();
    expect(screen.getByText(/integração fácil/i)).toBeInTheDocument();
  });

  it("deve renderizar 3 cards de features", () => {
    renderWithRouter(<Features />);
    const featureCards = screen.getAllByTestId(/feature-card/);

    expect(featureCards).toHaveLength(3);
  });

  it("deve renderizar título de cada feature", () => {
    renderWithRouter(<Features />);

    expect(screen.getByText(/detecção inteligente/i)).toBeInTheDocument();
    expect(screen.getByText(/análise em tempo real/i)).toBeInTheDocument();
    expect(screen.getByText(/integração fácil/i)).toBeInTheDocument();
  });
});

/**
 * Testes para CTA Component
 * Valida renderização de call-to-action
 */
describe("CTA Component", () => {
  it("deve renderizar título e descrição do CTA", () => {
    renderWithRouter(<CTA />);

    expect(screen.getByTestId("cta-section")).toBeInTheDocument();
    expect(screen.getByText(/cadastre-se agora/i)).toBeInTheDocument();
  });

  it("deve renderizar botão de ação com classe btn-large", () => {
    renderWithRouter(<CTA />);
    const button = screen.getByRole("button", {
      name: /criar conta gratuita/i,
    });

    expect(button).toBeInTheDocument();
    expect(button).toHaveClass("btn-large");
  });
});
