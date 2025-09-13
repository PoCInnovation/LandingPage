import antfu from '@antfu/eslint-config'

export default antfu(
  {
    react: true,
    typescript: true,
    lessOpinionated: true,
    stylistic: {
      indent: 2,
      semi: false,
      quotes: 'single',
      jsx: true,
    },
    formatters: {
      css: true,
    },
  },
  {
    rules: {
      'ts/consistent-type-definitions': ['error', 'type'],
      'no-console': ['warn'],
      'antfu/no-top-level-await': ['off'],
      'node/prefer-global/process': ['off'],
      'node/no-process-env': ['error'],
      'style/jsx-quotes': ['error', 'prefer-single'],
      'react/prefer-destructuring-assignment': ['off'],
      'react-hooks/exhaustive-deps': ['warn'],
      'react-refresh/only-export-components': ['warn'],
    },
    ignores: ['**/fixtures', '**/.next', '**/dist', '**/build'],
  },
)
