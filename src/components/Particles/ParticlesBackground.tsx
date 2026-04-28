import { useCallback, useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { ISourceOptions } from "@tsparticles/engine";

const particlesOptions: ISourceOptions = {
  fullScreen: false,
  background: { color: { value: "transparent" } },
  fpsLimit: 60,
  particles: {
    number: {
      value: 80,
      density: { enable: true, width: 1920, height: 1080 },
    },
    color: { value: ["#646cff", "#40e0d0", "#a78bfa"] },
    shape: { type: "circle" },
    opacity: {
      value: { min: 0.4, max: 0.8 },
      animation: { enable: true, speed: 0.8, sync: false },
    },
    size: { value: { min: 1.5, max: 4 } },
    links: {
      enable: true,
      distance: 140,
      color: "#646cff",
      opacity: 0.4,
      width: 1,
    },
    move: {
      enable: true,
      speed: 0.8,
      direction: "none",
      random: true,
      straight: false,
      outModes: { default: "bounce" },
    },
  },
  interactivity: {
    events: {
      onHover: { enable: true, mode: "repulse" },
      onClick: { enable: true, mode: "push" },
    },
    modes: {
      repulse: { distance: 100, duration: 0.4 },
      push: { quantity: 3 },
    },
  },
  detectRetina: true,
};

// Singleton: inicializa o engine apenas uma vez por ciclo de vida da app
let engineInitialized = false;
let enginePromise: Promise<void> | null = null;

function getEnginePromise(): Promise<void> {
  if (!enginePromise) {
    enginePromise = initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    });
  }
  return enginePromise;
}

export const ParticlesBackground: React.FC = () => {
  const [engineReady, setEngineReady] = useState(engineInitialized);

  useEffect(() => {
    if (engineInitialized) {
      setEngineReady(true);
      return;
    }
    let cancelled = false;
    getEnginePromise().then(() => {
      engineInitialized = true;
      if (!cancelled) setEngineReady(true);
    });
    return () => {
      cancelled = true;
    };
  }, []);

  const particlesLoaded = useCallback(async () => {}, []);

  if (!engineReady) return null;

  return (
    <Particles
      id="tsparticles-bg"
      // fixed: cobre todo o viewport, atrás de todo o conteúdo
      className="fixed inset-0 z-0 pointer-events-none"
      options={particlesOptions}
      particlesLoaded={particlesLoaded}
    />
  );
};

export default ParticlesBackground;
