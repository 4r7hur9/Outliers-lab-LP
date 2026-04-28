import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../data/constants";
import { StatCard } from "../StatCard/StatCard";

export const Hero: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section
      data-testid="hero-section"
      className="text-center flex flex-col items-center"
    >
      {/* Título Principal */}
      <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold mb-4 leading-[1.1] tracking-tight">
        <span className="gradient-text block">Detecte Anomalias</span>
        <span className="text-white">com Precisão</span>
      </h1>

      {/* Subtítulo */}
      <p className="text-sm sm:text-base lg:text-lg text-gray-400 mb-8 leading-relaxed max-w-lg mx-auto">
        Identifique padrões ocultos e dados atípicos em segundos. Tome decisões
        baseadas em insights precisos gerados por IA.
      </p>

      {/* Botões de Ação */}
      <div className="flex flex-col sm:flex-row gap-3 justify-center mb-10">
        <button
          onClick={() => navigate(ROUTES.CADASTRO)}
          className="inline-flex items-center gap-2 px-8 py-3.5 text-base font-bold text-white rounded-xl bg-gradient-to-r from-primary to-purple-500 shadow-lg shadow-primary/40 hover:shadow-primary/60 hover:scale-105 active:scale-95 transition-all duration-300"
          aria-label="Começar análise"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13 10V3L4 14h7v7l9-11h-7z"
            />
          </svg>
          Começar Gratuitamente
        </button>
        <button
          onClick={() => navigate(ROUTES.RECURSOS)}
          className="inline-flex items-center gap-2 px-8 py-3.5 text-base font-semibold text-white rounded-xl border border-white/20 bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:border-white/40 transition-all duration-300"
          aria-label="Saiba mais"
        >
          Ver Recursos
          <svg
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>

      {/* Stats animados */}
      <div className="grid grid-cols-3 gap-3 sm:gap-4 max-w-md mx-auto w-full">
        <StatCard
          target={98}
          suffix="%"
          label="Acurácia"
          color="from-primary to-blue-400"
        />
        <StatCard
          target={0.1}
          decimals={1}
          prefix="<"
          suffix="s"
          label="Tempo Real"
          color="from-secondary to-cyan-400"
        />
        <StatCard
          target={10}
          suffix="K+"
          label="Usuários"
          color="from-purple-400 to-primary"
        />
      </div>
    </section>
  );
};

export default Hero;
