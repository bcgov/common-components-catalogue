const path = require('path');

module.exports = {
  parser: 'babel-eslint',
  root: true,
  env: {
    node: true,
    browser: true,
    "jest/globals": true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'airbnb-base',
  ],
  plugins: ['jest'],
  parserOptions: {},
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      alias: {
        map: [['@', path.join(__dirname, 'src')]],
      },
    },
  },
  rules: {
    'radix': 0,
    'max-len': 0,
    'template-curly-spacing' : 0,
    'indent': ['error', 2, { ignoredNodes: ['TemplateLiteral'] }],
    'react/prop-types': 0,
    'react/display-name': 0,
    'import/prefer-default-export': 0,
  },
};
