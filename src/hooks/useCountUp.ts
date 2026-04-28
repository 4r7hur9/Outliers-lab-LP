import { useEffect, useRef, useState } from "react";

/**
 * Anima um número de 0 até `target` em `duration` ms com easing cúbico.
 * A animação só inicia quando `triggerKey` muda e é maior que 0.
 */
export function useCountUp(
  target: number,
  duration: number,
  decimals: number,
  triggerKey: number,
): number {
  const [count, setCount] = useState(0);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    if (triggerKey === 0) return;
    let startTime: number | null = null;

    const animate = (timestamp: number) => {
      if (!startTime) {
        startTime = timestamp;
        setCount(0);
        rafRef.current = requestAnimationFrame(animate);
        return;
      }
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(parseFloat((eased * target).toFixed(decimals)));
      if (progress < 1) {
        rafRef.current = requestAnimationFrame(animate);
      } else {
        setCount(target);
      }
    };

    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  }, [triggerKey, target, duration, decimals]);

  return count;
}
