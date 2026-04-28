import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ROUTES } from "../../data/constants";
export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const menuItems = [
    { label: "Home", path: "/" },
    { label: "Recursos", path: "/recursos" },
    { label: "Sobre", path: "/sobre" },
    { label: "Contato", path: "/contato" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-effect border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo */}
          <Link
            to="/"
            className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent hover:from-primary-hover hover:to-cyan-400 transition-all"
          >
            OUTLIERS LAB
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="text-gray-300 hover:text-white font-semibold transition-colors duration-200 relative group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <button
            onClick={() => navigate(ROUTES.CADASTRO)}
            className="hidden md:block btn-primary px-6 py-2 text-sm"
            aria-label="Começar agora"
          >
            Começar
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex flex-col gap-1 cursor-pointer"
            aria-label="Toggle menu"
          >
            <span
              className={`w-6 h-0.5 bg-white transition-transform duration-300 ${
                isOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`w-6 h-0.5 bg-white transition-opacity duration-300 ${
                isOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`w-6 h-0.5 bg-white transition-transform duration-300 ${
                isOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 border-t border-white/10">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className="block py-3 px-4 text-gray-300 hover:text-white hover:bg-white/5 transition-colors duration-200 font-semibold"
              >
                {item.label}
              </Link>
            ))}
            <button
              className="w-full btn-primary mt-4"
              onClick={() => navigate(ROUTES.CADASTRO)}
            >
              Começar
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
