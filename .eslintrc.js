/** @type import('eslint').Linter.Config */
const config = {
  root: true,
  reportUnusedDisableDirectives: true,
  parser: '@typescript-eslint/parser',
  plugins: ['import', 'react', 'react-hooks', '@typescript-eslint'],
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'prettier',
  ],
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  parserOptions: {
    ecmaFeatures: { jsx: true },
    ecmaVersion: 2021,
    project: ['./tsconfig.eslint.json'],
    sourceType: 'module',
    tsconfigRootDir: __dirname,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    // General
    radix: 'error',
    'no-duplicate-imports': 'off', // To use TS version
    'no-shadow': 'off', // use TS versions
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',

    // TS
    '@typescript-eslint/ban-types': [
      'error',
      {
        types: {
          'React.FC': 'See https://github.com/facebook/create-react-app/pull/8177 for details',
          FC: 'See https://github.com/facebook/create-react-app/pull/8177 for details',
          'React.FunctionComponent':
            'See https://github.com/facebook/create-react-app/pull/8177 for details',
          FunctionComponent:
            'See https://github.com/facebook/create-react-app/pull/8177 for details',
        },
      },
    ],
    '@typescript-eslint/consistent-type-exports': [
      'error',
      { fixMixedExportsWithInlineTypeSpecifier: true },
    ],
    '@typescript-eslint/consistent-type-imports': 'error',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-duplicate-imports': 'error',
    '@typescript-eslint/no-misused-promises': 'warn', // too noisy, disable?
    '@typescript-eslint/no-shadow': 'error',
    '@typescript-eslint/no-unsafe-argument': 'warn',
    '@typescript-eslint/no-unsafe-assignment': 'warn',
    '@typescript-eslint/no-unsafe-call': 'warn',
    '@typescript-eslint/no-unsafe-member-access': 'warn',
    '@typescript-eslint/no-unsafe-return': 'warn',
    '@typescript-eslint/no-use-before-define': ['error', { functions: false, classes: true }],
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
        args: 'all',
      },
    ],
    '@typescript-eslint/restrict-template-expressions': 'off',

    // React
    'import/no-default-export': 'error',
    'react/destructuring-assignment': 'off',
    'react/forbid-prop-types': 'error',
    'react/jsx-no-useless-fragment': 'warn',
    'react/no-unescaped-entities': 'off',
    'react/prop-types': 'off',
    'react-hooks/exhaustive-deps': 'error',
    'react-hooks/rules-of-hooks': 'error',
  },

  overrides: [
    {
      files: ['*.js'],
      rules: {
        '@typescript-eslint/no-var-requires': 'off',
      },
    },
  ],
};

module.exports = config;
