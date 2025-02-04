module.exports = {
    root: true,
    env: { browser: true, es2020: true },
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react-hooks/recommended',
        // This disables the formatting rules in ESLint that Prettier is going to be responsible for handling.
        // Make sure it's always the last config, so it gets the chance to override other configs.
        'prettier',
    ],
    ignorePatterns: ['dist', '.eslintrc.cjs'],
    parser: '@typescript-eslint/parser',
    plugins: ['react-refresh'],
    rules: {
        'camelcase': 'error',
        'spaced-comment': 'error',
        'no-duplicate-imports': 'error',
        '@typescript-eslint/consistent-type-imports': ["error", {
            prefer: 'type-imports',
            disallowTypeAnnotations: true,
            fixStyle: 'inline-type-imports',
        },],
        'react-refresh/only-export-components': [
            'warn',
            { allowConstantExport: true },
        ],
    },
}
