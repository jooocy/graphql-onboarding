module.exports = {
  root: true,
  parser: '@typescript-eslint/parser', // Specifies the ESLint parser
  parserOptions: {
    ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
    project: 'tsconfig.json',
    tsconfigRootDir: '.',
    // Workaround for parser error with new files
    // https://github.com/typescript-eslint/typescript-eslint/issues/864
    // createDefaultProgram: true,
  },
  extends: [
    'plugin:@typescript-eslint/recommended', // uses typescript-specific linting rules
    'plugin:prettier/recommended', // enables eslint-plugin-prettier and eslint-config-prettier
  ],
  rules: {
    // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
    // e.g. "@typescript-eslint/explicit-function-return-type": "off",
    'padding-line-between-statements': [
      'warn',
      {blankLine: 'always', prev: '*', next: 'return'},
      {blankLine: 'always', prev: ['const', 'let', 'var'], next: '*'},
      {
        blankLine: 'any',
        prev: ['const', 'let', 'var'],
        next: ['const', 'let', 'var'],
      },
    ],
    indent: 'off',
    'prefer-const': 'warn',
    'require-await': 'warn',
    // "@typescript-eslint/indent": ["error", 2],
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/no-explicit-any': 'warn',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    '@typescript-eslint/explicit-member-accessibility': 0,
    '@typescript-eslint/member-delimiter-style': 'off',
    '@typescript-eslint/no-empty-interface': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/ban-ts-ignore': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    // "@typescript-eslint/member-delimiter-style": {
    //     delimiter: "none",
    //     requireLast: true,
    // },
  },
  plugins: ['@typescript-eslint', 'prettier'],
  settings: {},
  env: {},
}
