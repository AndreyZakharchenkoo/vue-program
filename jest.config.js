module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  collectCoverage: true,
  collectCoverageFrom: ['./src/*.{js,vue}', './src/components/*.{js,vue}', './src/pages/*.{js,vue}', '!**/node_modules/**'],
};
