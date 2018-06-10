module.exports = {
  parser: 'babel-eslint',
  extends: 'airbnb',
  env: {
    browser: true,
    node: true,
    es6: true,
    jest: true,
    jquery: true,
  },
  plugins: [
    'mocha',
    'react',
    'jsx-a11y',
  ],
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    'max-len': 0,
    'no-underscore-dangle': 0,
    'object-curly-newline': 0,
    'import/no-extraneous-dependencies': 0,
    'import/prefer-default-export': 0,
    'import/no-unresolved': 0,
    'import/extensions': 0,
    'class-methods-use-this': 0,
    'react/forbid-prop-types': 0,
    'react/jsx-first-prop-new-line': 0,
    'react/jsx-max-props-per-line': 0,
    'react/jsx-closing-bracket-location': 0,
    'react/jsx-no-target-blank': 0,
    'react/jsx-filename-extension': 0,
    'react/no-unescaped-entities': 0,
    'react/prefer-stateless-function': 0,
    'jsx-a11y/href-no-hash': 0,
    'jsx-a11y/label-has-for': 0,
    'jsx-a11y/no-static-element-interactions': 0,
    'jsx-a11y/no-noninteractive-element-interactions': 0,
    'jsx-a11y/alt-text': 0,
  }
};
