module.exports = {
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|webp|svg|woff2)$': '<rootDir>/src/test/mock.js',
    '\\.(css|less|scss)$': 'identity-obj-proxy',
  },
  setupTestFrameworkScriptFile: '<rootDir>src/test/setup.js',
};
