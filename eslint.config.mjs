import globals from 'globals'
import pluginJs from '@eslint/js'
import tseslint from 'typescript-eslint'
import pluginReact from 'eslint-plugin-react'
import eslintPluginPrettier from 'eslint-plugin-prettier'

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
    plugins: {
      prettier: eslintPluginPrettier,
      react: pluginReact,
    },
    rules: {
      'prettier/prettier': ['error'],
    },
  },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    settings: {
      react: {
        version: '18',
      },
    },
    rules: {
      'react/react-in-jsx-scope': 'off', // Disable the rule that requires React to be in scope
    },
  },
  {
    // Note: there should be no other properties in this object
    ignores: ['**/dist', '**/node_modules'],
  },
]
