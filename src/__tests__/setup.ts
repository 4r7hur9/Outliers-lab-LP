/**
 * Setup global para testes com Jest
 * Importa matchers customizados do @testing-library/jest-dom
 */
import "@testing-library/jest-dom";

// Polyfill para TextEncoder/TextDecoder necessário para React Router
// eslint-disable-next-line @typescript-eslint/no-require-imports
const { TextEncoder, TextDecoder } = require("util");

if (typeof global.TextEncoder === "undefined") {
  global.TextEncoder = TextEncoder;
  global.TextDecoder = TextDecoder;
}

// Polyfill para IntersectionObserver (não disponível no JSDOM)
global.IntersectionObserver = class MockIntersectionObserver {
  constructor(_cb: IntersectionObserverCallback) {}
  observe() {}
  unobserve() {}
  disconnect() {}
} as unknown as typeof IntersectionObserver;
