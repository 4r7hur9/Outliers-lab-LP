import { useEffect, useRef, useState } from "react";
import { useCountUp } from "../../hooks/useCountUp";

export interface StatCardProps {
  target: number;
  decimals?: number;
  prefix?: string;
  suffix: string;
  label: string;
  color: string;
}

export const StatCard: React.FC<StatCardProps> = ({
  target,
  decimals = 0,
  prefix = "",
  suffix,
  label,
  color,
}) => {
  const divRef = useRef<HTMLDivElement>(null);
  const [animKey, setAnimKey] = useState(0);
  const count = useCountUp(target, 1600, decimals, animKey);

  // Dispara a animação toda vez que o card entra no viewport
  useEffect(() => {
    const el = divRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimKey((k) => k + 1);
        }
      },
      { threshold: 0.5 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const display = decimals > 0 ? count.toFixed(decimals) : Math.round(count);

  return (
    <div
      ref={divRef}
      data-testid="stat-card"
      className="flex flex-col items-center gap-1.5 py-5 px-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:border-white/20 transition-all duration-300"
    >
      <span
        className={`text-3xl sm:text-4xl font-extrabold bg-gradient-to-r ${color} bg-clip-text text-transparent tabular-nums`}
      >
        {prefix}
        {display}
        {suffix}
      </span>
      <span className="text-gray-400 text-xs font-medium tracking-widest uppercase">
        {label}
      </span>
    </div>
  );
};

export default StatCard;
