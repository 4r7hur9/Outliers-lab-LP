/**
 * Configuração global do Jest com matchers do @testing-library/jest-dom
 * e polyfills necessários para o ambiente jsdom.
 */
import '@testing-library/jest-dom'
import { TextEncoder, TextDecoder } from 'util'

// Polyfill necessário para react-router-dom v6+ no jsdom
global.TextEncoder = TextEncoder
// eslint-disable-next-line @typescript-eslint/no-explicit-any
global.TextDecoder = TextDecoder as any
