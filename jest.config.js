module.exports = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/tests/setup.js'],
  testMatch: ['<rootDir>/tests/**/*.test.js'],
  collectCoverageFrom: [
    'lab/**/*.html'
  ],
  testEnvironmentOptions: {
    html: '<!DOCTYPE html><html><head></head><body></body></html>',
    url: 'http://localhost',
    pretendToBeVisual: true,
    resources: 'usable'
  }
};