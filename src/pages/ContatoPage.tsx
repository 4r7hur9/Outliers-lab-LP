/**
 * ContatoPage Component
 * Página de contato com formulário e informações
 */

import React, { useState } from "react";
import type { ContactFormData } from "../types";
import { CONTACT_INFO, FAQ_ITEMS, TIMEOUTS } from "../data/constants";

const ContatoPage: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setError(null);
  };

  const validateEmail = (email: string): boolean => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    // Validação
    if (!formData.name.trim()) {
      setError("Por favor, preencha seu nome");
      setLoading(false);
      return;
    }

    if (!validateEmail(formData.email)) {
      setError("Por favor, preencha um email válido");
      setLoading(false);
      return;
    }

    if (!formData.message.trim()) {
      setError("Por favor, preencha sua mensagem");
      setLoading(false);
      return;
    }

    try {
      // Simula envio de formulário (futuramente: await api.contact.send(formData))
      setSubmitted(true);
      setTimeout(() => {
        setFormData({ name: "", email: "", company: "", message: "" });
        setSubmitted(false);
      }, TIMEOUTS.FORM_RESET_DELAY);
    } catch (err) {
      setError(
        "Erro ao enviar mensagem. Por favor, tente novamente mais tarde.",
      );
      console.error("Erro ao enviar formulário:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="w-full bg-gradient-to-b from-dark-bg via-dark-secondary to-dark-bg pt-16 lg:pt-20">
      {/* Header */}
      <section className="py-10 sm:py-16 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold gradient-text mb-4">
            Entre em Contato
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-gray-400 max-w-3xl mx-auto">
            Tire suas dúvidas, conheça nossa equipe ou solicite um demo
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
            {CONTACT_INFO.map((info, idx) => (
              <a
                key={idx}
                href={info.link}
                className="glass-effect p-8 rounded-xl border border-white/10 hover:border-primary hover:bg-blue-500/5 transition-all duration-300 group text-center"
              >
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">
                  {info.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {info.title}
                </h3>
                <p className="text-gray-400">{info.value}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-14 sm:py-20 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent">
        <div className="max-w-3xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="glass-effect border border-white/10 p-8 sm:p-12 rounded-xl">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">
              Envie-nos uma mensagem
            </h2>

            {submitted ? (
              <div className="text-center py-12">
                <div className="text-6xl mb-4">✅</div>
                <h3 className="text-2xl font-bold text-green-400 mb-2">
                  Mensagem enviada com sucesso!
                </h3>
                <p className="text-gray-400">Entraremos em contato em breve</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {error && (
                  <div className="p-4 bg-red-500/20 border border-red-500 rounded-lg text-red-300">
                    {error}
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white font-semibold mb-2">
                      Nome *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Seu nome completo"
                      className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-500 focus:border-primary focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-white font-semibold mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="seu@email.com"
                      className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-500 focus:border-primary focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-white font-semibold mb-2">
                    Empresa
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Nome da sua empresa (opcional)"
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-500 focus:border-primary focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-white font-semibold mb-2">
                    Mensagem *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Como podemos ajudá-lo?"
                    rows={6}
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-500 focus:border-primary focus:outline-none transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full btn-primary py-4 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? "Enviando..." : "Enviar Mensagem"}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-14 sm:py-20">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold gradient-text mb-4">
              Perguntas Frequentes
            </h2>
          </div>

          <div className="space-y-6">
            {FAQ_ITEMS.map((faq, idx) => (
              <div
                key={idx}
                className="glass-effect p-8 rounded-xl border border-white/10 hover:border-secondary transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-white mb-3 flex items-center">
                  <span className="text-secondary text-2xl mr-3">Q:</span>
                  {faq.q}
                </h3>
                <p className="text-gray-400 ml-11">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContatoPage;
