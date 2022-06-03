module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb',
    'plugin:prettier/recommended',
    'plugin:react/recommended',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', 'react-hooks', 'prettier'],
  rules: {
    'react/jsx-filename-extension': [
      'error',
      {
        extensions: ['.js', '.jsx'],
      },
    ],
    'no-unused-expresions': 'off',
    'import/prefer-default-export': 'off',
    'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
    'react/jsx-one-expression-per-line': 'off',
    'no-param-reassign': 'off',
    camelcase: 'off',
    'no-console': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/props-type': 'off',
    'react/jsx-no-bind': 'off',
    'prettier/prettier': ['error', { endOfLine: 'auto' }],
  },
};
