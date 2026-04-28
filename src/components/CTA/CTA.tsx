import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../data/constants";

/**
 * CTA (Call-To-Action) Component
 * Seção final de incentivo para inscrição
 * Exibe mensagem motivacional e botão de ação
 *
 * @returns {JSX.Element} Seção CTA estilizada com Tailwind
 */
export const CTA: React.FC = () => {
  const navigate = useNavigate();

  const handleSignUp = () => {
    navigate(ROUTES.CADASTRO);
  };

  return (
    <section
      data-testid="cta-section"
      className="relative overflow-hidden p-12 sm:p-16 rounded-3xl text-center border border-primary/20 backdrop-blur-xl bg-gradient-to-br from-primary/8 via-blue-500/5 to-secondary/8"
    >
      {/* glow blobs */}
      <div className="absolute -top-16 -left-16 w-64 h-64 rounded-full bg-primary/20 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-16 -right-16 w-64 h-64 rounded-full bg-secondary/20 blur-3xl pointer-events-none" />
      <h2 className="font-extrabold leading-tight tracking-tight mb-4 text-4xl sm:text-5xl lg:text-6xl">
        <span className="gradient-text">Pronto para </span>
        <span className="text-white">Começar?</span>
      </h2>
      <p className="text-lg sm:text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
        Cadastre-se agora e explore seus dados como nunca antes.
      </p>
      <button
        onClick={handleSignUp}
        className="btn-primary btn-large"
        aria-label="Criar conta gratuita"
      >
        Criar Conta Gratuita
      </button>
    </section>
  );
};

export default CTA;
