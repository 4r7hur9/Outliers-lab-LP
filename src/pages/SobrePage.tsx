/**
 * SobrePage Component
 * Página sobre a empresa e missão
 */

import React from "react";

const SobrePage: React.FC = () => {
  const team = [
    {
      name: "Dr. João Silva",
      role: "CEO & Founder",
      bio: "PhD em Machine Learning com 10+ anos na indústria",
      avatar: "JS",
    },
    {
      name: "Maria Costa",
      role: "CTO",
      bio: "Arquiteta de sistemas distribuídos, ex-Google",
      avatar: "MC",
    },
    {
      name: "Pedro Oliveira",
      role: "Head of Data Science",
      bio: "Especialista em estatística avançada e IA",
      avatar: "PO",
    },
    {
      name: "Ana Ferreira",
      role: "Product Lead",
      bio: "Design thinking e user experience como paixão",
      avatar: "AF",
    },
  ];

  const milestones = [
    { year: "2020", event: "Fundação da Outliers Lab" },
    { year: "2021", event: "Primeira 1.000 empresas usando a plataforma" },
    { year: "2022", event: "Série A - $5M de investimento" },
    { year: "2023", event: "Expansão para América Latina e Europa" },
    { year: "2024", event: "10K+ empresas. Unicórnio em vista! 🦄" },
  ];

  return (
    <main className="w-full bg-gradient-to-b from-dark-bg via-dark-secondary to-dark-bg pt-16 lg:pt-20">
      {/* Header */}
      <section className="py-10 sm:py-16 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold gradient-text mb-4">
            Sobre Outliers Lab
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-gray-400 max-w-3xl mx-auto">
            Transformando dados brutos em insights valiosos desde 2020
          </p>
        </div>
      </section>

      {/* Missão, Visão, Valores */}
      <section className="py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
            <div className="glass-effect p-8 rounded-xl border border-white/10 hover:border-primary transition-all duration-300">
              <div className="text-5xl mb-4">🎯</div>
              <h3 className="text-2xl font-bold text-white mb-4">Missão</h3>
              <p className="text-gray-400">
                Democratizar a análise avançada de dados, tornando-a acessível
                para empresas de todos os tamanhos e industrias.
              </p>
            </div>
            <div className="glass-effect p-8 rounded-xl border border-white/10 hover:border-secondary transition-all duration-300">
              <div className="text-5xl mb-4">🚀</div>
              <h3 className="text-2xl font-bold text-white mb-4">Visão</h3>
              <p className="text-gray-400">
                Ser a plataforma número 1 para detecção de anomalias e análise
                de outliers em tempo real no mundo.
              </p>
            </div>
            <div className="glass-effect p-8 rounded-xl border border-white/10 hover:border-cyan-500 transition-all duration-300">
              <div className="text-5xl mb-4">💎</div>
              <h3 className="text-2xl font-bold text-white mb-4">Valores</h3>
              <p className="text-gray-400">
                Transparência, inovação contínua, excelência técnica e impacto
                positivo no negócio dos clientes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-14 sm:py-20 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold gradient-text mb-4">
              Nossa Jornada
            </h2>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary to-secondary" />

            <div className="space-y-12">
              {milestones.map((milestone, idx) => (
                <div
                  key={idx}
                  className={`flex gap-8 ${
                    idx % 2 === 0 ? "flex-row" : "flex-row-reverse"
                  }`}
                >
                  <div className="w-1/2 text-right sm:text-left">
                    <div className="glass-effect p-6 rounded-xl border border-white/10 hover:border-secondary transition-all duration-300">
                      <div className="text-lg font-bold text-secondary mb-2">
                        {milestone.year}
                      </div>
                      <p className="text-gray-400">{milestone.event}</p>
                    </div>
                  </div>
                  <div className="w-0" />
                  <div className="w-1/2 sm:text-left text-right">
                    {/* Timeline dot */}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold gradient-text mb-4">
              Nosso Time
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-400">
              Especialistas dedicados transformando dados em insights
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
            {team.map((member, idx) => (
              <div
                key={idx}
                className="glass-effect p-8 rounded-xl border border-white/10 hover:border-primary hover:bg-blue-500/5 transition-all duration-300 text-center group"
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center font-bold text-lg mx-auto mb-4 group-hover:scale-110 transition-transform">
                  {member.avatar}
                </div>
                <h3 className="text-xl font-bold text-white mb-1">
                  {member.name}
                </h3>
                <p className="text-secondary font-semibold mb-3">
                  {member.role}
                </p>
                <p className="text-gray-400 text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 sm:py-20 bg-gradient-to-r from-blue-500/10 to-cyan-500/10">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold gradient-text mb-4">
            Faça parte da revolução dos dados
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-400 mb-6">
            Junte-se a milhares de empresas que confiam em nós
          </p>
          <button className="btn-primary btn-large">Comece Agora</button>
        </div>
      </section>
    </main>
  );
};

export default SobrePage;
