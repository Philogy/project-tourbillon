module.exports = {
  env: {
    commonjs: true,
    es2021: true,
    node: true
  },
  globals: {
    describe: 'readonly',
    it: 'readonly',
    before: 'readonly',
    beforeEach: 'readonly'
  },
  extends: 'eslint:recommended',
  parserOptions: {
    ecmaVersion: 13
  },
  rules: {
    indent: ['error', 2],
    'linebreak-style': ['error', 'unix'],
    quotes: ['error', 'single'],
    semi: ['error', 'never']
  }
}
