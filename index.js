module.exports = {
    extends: 'eslint:recommended',
    parserOptions: {
        ecmaVersion: 6,
        sourceType: 'module',
        ecmaFeatures: {
            experimentalObjectRestSpread: true,
        },
    },
    env: {
        es6: true,
    },
    rules: {
        'array-bracket-spating': ['error', 'always'],
        'brace-style': ['error', '1tbs'],
        'comma-dangle': ['error', 'always-multiline'],
        'comma-style': ['error', 'last'],
        'indent': ['error', 4, {
            'SwitchCase': 1
        }],
        'linebreak-style': ['error', 'unix'],
        'keyword-spacing': 'error',
        'prefer-const': 'error',
        'max-len': ['error', 120, {
            comments: 80,
            ignoreComments: false,
            ignoreTrailingComments: false,
        }],
        'no-case-declarations': 'off',
        'no-const-assign': 'error',
        'no-whitespace-before-property': 'error',
        'object-curly-spacing': ['error', 'always'],
        'quotes': ['error', 'single'],
        'semi': ['error', 'always'],
        'space-before-blocks': 'error',
        'space-before-function-paren': ['error', { 'anonymous': 'always', 'named': 'never' }],
        'space-in-parens': ['error', 'always'],
        'space-infix-ops': 'error',
        'strict': ['error', 'never'],
    },
};
