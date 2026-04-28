/**
 * CadastroPage Component
 * Página de cadastro/sign up
 */

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import type { ContactFormData } from "../types";
import { TIMEOUTS, ROUTES } from "../data/constants";

const CadastroPage: React.FC = () => {
  const navigate = useNavigate();
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

    if (!formData.company.trim()) {
      setError("Por favor, preencha o nome da sua empresa");
      setLoading(false);
      return;
    }

    try {
      // Simula envio de formulário (futuramente: await api.auth.signup(formData))
      setSubmitted(true);
      setTimeout(() => {
        setFormData({ name: "", email: "", company: "", message: "" });
        setSubmitted(false);
        navigate(ROUTES.HOME);
      }, TIMEOUTS.FORM_RESET_DELAY);
    } catch (err) {
      setError("Erro ao criar conta. Por favor, tente novamente mais tarde.");
      console.error("Erro ao cadastrar:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="w-full bg-gradient-to-b from-dark-bg via-dark-secondary to-dark-bg pt-16 lg:pt-20 min-h-screen flex items-center">
      <section className="w-full py-10 sm:py-16">
        <div className="max-w-md mx-auto px-6 sm:px-8">
          <div className="glass-effect border border-white/10 p-8 sm:p-12 rounded-xl">
            <div className="text-center mb-8">
              <h1 className="text-4xl sm:text-5xl font-bold gradient-text mb-4">
                Criar Conta
              </h1>
              <p className="text-gray-400">
                Junte-se a milhares de usuários analisando dados com Outliers
                Lab
              </p>
            </div>

            {submitted ? (
              <div className="text-center py-12">
                <div className="text-6xl mb-4">🎉</div>
                <h3 className="text-2xl font-bold text-green-400 mb-2">
                  Bem-vindo!
                </h3>
                <p className="text-gray-400">
                  Sua conta foi criada com sucesso. Redirecionando...
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {error && (
                  <div className="p-4 bg-red-500/20 border border-red-500 rounded-lg text-red-300 text-sm">
                    {error}
                  </div>
                )}

                <div>
                  <label className="block text-white font-semibold mb-2">
                    Nome Completo *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="João Silva"
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

                <div>
                  <label className="block text-white font-semibold mb-2">
                    Empresa/Organização *
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Sua empresa"
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-500 focus:border-primary focus:outline-none transition-colors"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full btn-primary py-4 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? "Criando Conta..." : "Criar Conta Gratuita"}
                </button>

                <div className="text-center text-sm text-gray-400">
                  Já tem conta?{" "}
                  <button
                    type="button"
                    onClick={() => navigate(ROUTES.LOGIN)}
                    className="text-primary hover:text-secondary transition-colors"
                  >
                    Faça login
                  </button>
                </div>
              </form>
            )}

            <div className="mt-8 pt-8 border-t border-white/10 text-center text-xs text-gray-500">
              <p>
                Ao criar uma conta, você concorda com nossos{" "}
                <a href="#" className="text-gray-400 hover:text-white">
                  Termos de Serviço
                </a>{" "}
                e{" "}
                <a href="#" className="text-gray-400 hover:text-white">
                  Política de Privacidade
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default CadastroPage;
