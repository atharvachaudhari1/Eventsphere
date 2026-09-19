import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'

export default [
  { ignores: ['dist', 'node_modules', '.vite'] },
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 2025,
      globals: globals.browser,
      parserOptions: {
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      // React Hooks rules — enforced strictly
      ...reactHooks.configs.recommended.rules,

      // React Refresh — warn only (for HMR compatibility)
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],

      // Code quality
      'no-unused-vars': ['warn', { argsIgnorePattern: '^_', varsIgnorePattern: '^_' }],
      'no-console':     ['warn', { allow: ['warn', 'error'] }],
      'no-debugger':    'error',
      'prefer-const':   'warn',
      'eqeqeq':         ['error', 'always'],

      // Best practices
      'no-var':             'error',
      'object-shorthand':   'warn',
      'prefer-template':    'warn',
      'prefer-destructuring': ['warn', { array: false, object: true }],
    },
  },
]
