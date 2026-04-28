import { LANDING_FEATURES } from "../../data/constants";
import { FeatureCard } from "./FeatureCard";

/**
 * Features Component
 * Exibe as principais funcionalidades da aplicação
 * Utiliza grid responsivo para apresentar cards de features
 *
 * @returns {JSX.Element} Seção de features com grid de cards
 */
export const Features: React.FC = () => {
  return (
    <div className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
        {LANDING_FEATURES.map((feature) => (
          <FeatureCard key={feature.id} {...feature} />
        ))}
      </div>
    </div>
  );
};

export default Features;
