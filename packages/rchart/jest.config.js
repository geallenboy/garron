module.exports = {
  setupFiles: ['jest-canvas-mock', './tests/setups/worker.js', './tests/setups/url.js'],
  transformIgnorePatterns: ['/node_modules/', '/src/.umi/'],
  collectCoverageFrom: ['./src/**/*.{ts,tsx}', '!./**/*.d.ts', '!src/.umi/**/*.{ts,tsx}'],
  coverageReporters: ['json', 'text', 'lcov', 'clover', 'cobertura'],
  testEnvironment: 'jsdom'
};
