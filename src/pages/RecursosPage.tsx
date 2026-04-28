/**
 * RecursosPage Component
 * Página detalhada de recursos e funcionalidades
 */

import React from "react";

const RecursosPage: React.FC = () => {
  const recursos = [
    {
      icon: "📊",
      title: "Análise Avançada",
      description:
        "Detecte anomalias com múltiplos algoritmos estatísticos. IQR, Z-Score, DBSCAN e redes neurais.",
      features: ["Detecção em tempo real", "Múltiplos métodos", "Precisão 98%"],
    },
    {
      icon: "📈",
      title: "Visualizações Interativas",
      description:
        "Gráficos dinâmicos que ajudam você a entender padrões nos seus dados.",
      features: ["Dashboards customizáveis", "Zoom/Pan", "Exportação HD"],
    },
    {
      icon: "🔗",
      title: "Integrações",
      description:
        "Conecte facilmente com suas ferramentas favoritas de dados.",
      features: ["50+ integrações", "APIs abertas", "Webhooks"],
    },
    {
      icon: "🛡️",
      title: "Segurança Enterprise",
      description:
        "Proteção de dados com criptografia end-to-end e conformidade.",
      features: ["GDPR", "SOC 2", "Criptografia AES-256"],
    },
    {
      icon: "👥",
      title: "Colaboração em Time",
      description: "Trabalhe junto com sua equipe em análises e relatórios.",
      features: ["Comentários", "Permissões granulares", "Auditoria completa"],
    },
    {
      icon: "⚡",
      title: "Performance",
      description: "Processe milhões de pontos de dados em segundos.",
      features: [
        "GPU acelerado",
        "Processamento em paralelo",
        "Cache inteligente",
      ],
    },
  ];

  return (
    <main className="w-full bg-gradient-to-b from-dark-bg via-dark-secondary to-dark-bg pt-16 lg:pt-20">
      {/* Header */}
      <section className="py-10 sm:py-16 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold gradient-text mb-4">
            Recursos Completos
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-gray-400 max-w-3xl mx-auto">
            Todas as ferramentas profissionais que você precisa para análise de
            dados avançada
          </p>
        </div>
      </section>

      {/* Recursos Grid */}
      <section className="py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {recursos.map((recurso, idx) => (
              <div
                key={idx}
                className="glass-effect p-8 rounded-xl border border-white/10 hover:border-primary hover:bg-blue-500/5 transition-all duration-300 group"
              >
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">
                  {recurso.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">
                  {recurso.title}
                </h3>
                <p className="text-gray-400 mb-6">{recurso.description}</p>
                <ul className="space-y-2">
                  {recurso.features.map((feature, i) => (
                    <li key={i} className="text-secondary flex items-center">
                      <span className="w-1.5 h-1.5 bg-secondary rounded-full mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparação de Planos */}
      <section className="py-14 sm:py-20 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold gradient-text mb-4">
              Planos Flexíveis
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-400">
              Escolha o plano que melhor se adapta ao seu negócio
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
            {[
              {
                name: "Starter",
                price: "Grátis",
                features: [
                  "Até 10K registros",
                  "1 integração",
                  "Análise básica",
                  "Suporte por email",
                ],
              },
              {
                name: "Professional",
                price: "$99/mês",
                features: [
                  "Até 1M registros",
                  "20 integrações",
                  "Análise avançada",
                  "Suporte prioritário",
                  "Dashboards ilimitados",
                ],
                highlighted: true,
              },
              {
                name: "Enterprise",
                price: "Custom",
                features: [
                  "Dados ilimitados",
                  "Integrações customizadas",
                  "API dedicada",
                  "Suporte 24/7",
                  "SLA garantido",
                ],
              },
            ].map((plano, idx) => (
              <div
                key={idx}
                className={`rounded-xl border p-8 transition-all duration-300 ${
                  plano.highlighted
                    ? "glass-effect border-secondary bg-gradient-to-br from-blue-500/20 to-cyan-500/10 transform scale-105"
                    : "glass-effect border-white/10 hover:border-primary"
                }`}
              >
                <h3 className="text-2xl font-bold text-white mb-2">
                  {plano.name}
                </h3>
                <div className="text-3xl font-bold gradient-text mb-6">
                  {plano.price}
                </div>
                <ul className="space-y-3">
                  {plano.features.map((feature, i) => (
                    <li key={i} className="text-gray-300 flex items-center">
                      <span className="w-2 h-2 bg-secondary rounded-full mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="w-full btn-primary mt-8">
                  {plano.name === "Enterprise" ? "Contato" : "Começar"}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default RecursosPage;
