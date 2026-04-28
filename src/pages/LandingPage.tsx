/**
 * LandingPage Component
 * Página principal com navegação por seções em scroll-snap
 * Cada seção ocupa 100vh, navegável por setas do teclado ou dots laterais
 */

import React, { useRef, useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { Hero } from "../components/Hero/Hero";
import { Features } from "../components/Features/Features";
import { CTA } from "../components/CTA/CTA";
import { LANDING_STATS, HOW_IT_WORKS, TESTIMONIALS } from "../data/constants";
import { ParticlesBackground } from "../components/Particles/ParticlesBackground";

const SECTION_LABELS = [
  "Início",
  "Recursos",
  "Números",
  "Como Funciona",
  "Depoimentos",
  "Comece Agora",
  "Rodapé",
];

const LandingPage: React.FC = () => {
  const [currentSection, setCurrentSection] = useState(0);
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const isNavigating = useRef(false);

  // Impede scroll da janela enquanto a LandingPage estiver ativa
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  const goTo = useCallback((index: number) => {
    const clamped = Math.max(0, Math.min(index, SECTION_LABELS.length - 1));
    const target = sectionRefs.current[clamped];
    if (target && !isNavigating.current) {
      isNavigating.current = true;
      target.scrollIntoView({ behavior: "smooth" });
      setCurrentSection(clamped);
      setTimeout(() => {
        isNavigating.current = false;
      }, 800);
    }
  }, []);

  // Navegação por setas do teclado
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const tag = (e.target as HTMLElement).tagName.toLowerCase();
      if (tag === "input" || tag === "textarea" || tag === "select") return;
      if (e.key === "ArrowDown" || e.key === "ArrowRight") {
        e.preventDefault();
        goTo(currentSection + 1);
      } else if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
        e.preventDefault();
        goTo(currentSection - 1);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [goTo, currentSection]);

  // Detecta seção ativa via IntersectionObserver
  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") return;
    const container = containerRef.current;
    const observers: IntersectionObserver[] = [];

    sectionRefs.current.forEach((ref, index) => {
      if (!ref) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setCurrentSection(index);
        },
        { threshold: 0.5, root: container },
      );
      observer.observe(ref);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const setRef = (index: number) => (el: HTMLElement | null) => {
    sectionRefs.current[index] = el;
  };

  const slide =
    "snap-start h-screen w-full flex items-center justify-center overflow-hidden pt-16 relative";

  return (
    <>
      {/* Partículas fixas cobrindo toda a página */}
      <ParticlesBackground />

      {/* Container scroll-snap */}
      <main
        ref={containerRef}
        className="h-screen overflow-y-scroll snap-y snap-mandatory no-scrollbar"
      >
        {/* Slide 1 — Hero */}
        <section ref={setRef(0)} className={`${slide} bg-black/20`}>
          <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <Hero />
          </div>
        </section>

        {/* Slide 2 — Features */}
        <section ref={setRef(1)} className={`${slide} bg-black/40`}>
          <div className="w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="text-center mb-8">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight mb-3">
                <span className="gradient-text">Recursos </span>
                <span className="text-white">Poderosos</span>
              </h2>
              <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto">
                Tudo que você precisa para analisar outliers com precisão e
                confiança
              </p>
            </div>
            <Features />
          </div>
        </section>

        {/* Slide 3 — Stats */}
        <section ref={setRef(2)} className={`${slide} bg-black/30`}>
          <div className="w-full max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="text-center mb-8">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight mb-3">
                <span className="gradient-text">Nossos </span>
                <span className="text-white">Números</span>
              </h2>
              <p className="text-base sm:text-lg text-gray-400">
                Resultados que falam por si
              </p>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {LANDING_STATS.map((stat, index) => (
                <div
                  key={index}
                  className="glass-effect p-6 sm:p-8 rounded-xl border border-white/10 text-center hover:border-secondary hover:bg-white/10 transition-all duration-300"
                >
                  <div className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">
                    {stat.value}
                  </div>
                  <p className="text-gray-400 text-sm sm:text-base font-semibold">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Slide 4 — How It Works */}
        <section ref={setRef(3)} className={`${slide} bg-black/40`}>
          <div className="w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="text-center mb-8">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight mb-3">
                <span className="gradient-text">Como </span>
                <span className="text-white">Funciona</span>
              </h2>
              <p className="text-base sm:text-lg text-gray-400">
                4 passos simples para começar
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {HOW_IT_WORKS.map((item, idx) => (
                <div
                  key={idx}
                  className="glass-effect p-6 sm:p-8 rounded-xl border border-white/10 hover:border-primary hover:bg-blue-500/5 transition-all duration-300 group"
                >
                  <div className="text-5xl font-bold text-primary/30 mb-4 group-hover:text-primary/50 transition-colors">
                    {item.step}
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 text-sm sm:text-base">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Slide 5 — Testimonials */}
        <section ref={setRef(4)} className={`${slide} bg-black/30`}>
          <div className="w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="text-center mb-8">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight mb-3">
                <span className="gradient-text">Confiado por </span>
                <span className="text-white">Empresas</span>
              </h2>
              <p className="text-base sm:text-lg text-gray-400">
                Milhares de times usam Outliers Lab diariamente
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              {TESTIMONIALS.map((testimonial, idx) => (
                <div
                  key={idx}
                  className="glass-effect p-6 sm:p-8 rounded-xl border border-white/10 hover:border-secondary transition-all duration-300"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center font-bold text-sm shrink-0">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-sm sm:text-base">
                        {testimonial.name}
                      </h4>
                      <p className="text-gray-400 text-xs sm:text-sm">
                        {testimonial.company}
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-300 italic text-sm sm:text-base">
                    "{testimonial.text}"
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Slide 6 — CTA */}
        <section ref={setRef(5)} className={`${slide} bg-black/40`}>
          <div className="w-full max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
            <CTA />
          </div>
        </section>

        {/* Slide 7 — Footer */}
        <section
          ref={setRef(6)}
          className={`${slide} bg-black/60 border-t border-white/10`}
        >
          <div className="w-full max-w-5xl mx-auto px-8 sm:px-12 lg:px-16 flex flex-col items-center gap-12">
            {/* Social proof */}
            <div className="text-center">
              <p className="text-gray-500 text-xs uppercase tracking-widest mb-4">
                Confiado por líderes em tecnologia
              </p>
              <div className="flex justify-center items-center gap-10 sm:gap-16 flex-wrap">
                {["Google", "IBM", "Microsoft", "AWS"].map((company) => (
                  <span
                    key={company}
                    className="font-bold text-gray-400 text-base sm:text-lg hover:text-white transition-colors duration-200"
                  >
                    {company}
                  </span>
                ))}
              </div>
            </div>

            {/* Divider */}
            <div className="w-full border-t border-white/10" />

            {/* Links grid */}
            <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-10 text-center sm:text-left">
              <div>
                <h4 className="text-white font-bold text-base mb-3">
                  OUTLIERS LAB
                </h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Análise de dados com inteligência artificial.
                </p>
              </div>
              <div>
                <h4 className="text-white font-bold text-base mb-3">
                  Links Rápidos
                </h4>
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li>
                    <Link to="/" className="hover:text-white transition">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/recursos"
                      className="hover:text-white transition"
                    >
                      Recursos
                    </Link>
                  </li>
                  <li>
                    <Link to="/sobre" className="hover:text-white transition">
                      Sobre
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-white font-bold text-base mb-3">Contato</h4>
                <p className="text-gray-400 text-sm">
                  <a
                    href="mailto:contato@outlierslab.com"
                    className="hover:text-white transition"
                  >
                    contato@outlierslab.com
                  </a>
                </p>
              </div>
            </div>

            {/* Copyright */}
            <div className="w-full border-t border-white/10 pt-4 text-center text-gray-500 text-sm">
              <p>&copy; 2024 Outliers Lab. Todos os direitos reservados.</p>
            </div>
          </div>
        </section>
      </main>

      {/* Dots de navegação lateral */}
      <nav
        className="fixed right-6 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-3"
        aria-label="Navegação por seção"
      >
        {SECTION_LABELS.map((label, index) => (
          <button
            key={index}
            onClick={() => goTo(index)}
            title={label}
            aria-label={`Ir para ${label}`}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              currentSection === index
                ? "bg-secondary scale-150 shadow-lg shadow-cyan-500/50"
                : "bg-white/30 hover:bg-white/60"
            }`}
          />
        ))}
      </nav>

      {/* Seta para próxima seção */}
      {currentSection < SECTION_LABELS.length - 1 && (
        <button
          onClick={() => goTo(currentSection + 1)}
          className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 text-white/40 hover:text-secondary transition-colors duration-300 animate-bounce"
          aria-label="Próxima seção"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
      )}
    </>
  );
};

export default LandingPage;
