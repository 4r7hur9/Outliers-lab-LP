import type { Config } from 'jest'

/**
 * Configuração do Jest para testes unitários.
 * - Usa ts-jest para transpilar TypeScript
 * - Usa jsdom como ambiente de navegador simulado
 * - Mapeia imports de CSS para identity-obj-proxy
 * - Ignora a pasta e2e (reservada para testes Playwright)
 */
const config: Config = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  moduleNameMapper: {
    // Substitui imports de CSS por objetos proxy
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    // Substitui imports de arquivos estáticos
    '\\.(gif|ttf|eot|svg|png|jpg|jpeg|webp)$': '<rootDir>/__mocks__/fileMock.ts',
  },
  transform: {
    '^.+\\.(ts|tsx)$': [
      'ts-jest',
      {
        tsconfig: './tsconfig.test.json',
      },
    ],
  },
  // Padrão de arquivos de teste (exclui e2e)
  testMatch: ['**/__tests__/**/*.test.(ts|tsx)', '**/*.test.(ts|tsx)'],
  testPathIgnorePatterns: ['/node_modules/', '/e2e/'],
  collectCoverageFrom: [
    'src/**/*.{ts,tsx}',
    '!src/**/*.d.ts',
    '!src/main.tsx',
  ],
}

export default config
