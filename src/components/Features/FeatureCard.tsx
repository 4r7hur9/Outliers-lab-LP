import type { FeatureCardProps } from "../../types";

export const FeatureCard: React.FC<FeatureCardProps> = ({
  id,
  title,
  description,
}) => {
  return (
    <div
      data-testid={`feature-card-${id}`}
      className="glass-effect border border-blue-500/30 p-8 rounded-xl transition-all duration-300 hover:translate-y-[-5px] hover:bg-blue-500/15 hover:border-secondary hover:shadow-lg hover:shadow-blue-500/20"
    >
      <h3 className="text-2xl font-bold text-secondary mb-4">{title}</h3>
      <p className="text-gray-300 leading-relaxed text-base">{description}</p>
    </div>
  );
};

export default FeatureCard;
