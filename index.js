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
        'brace-style': ['error', '1tbs'],
        'comma-dangle': ['error', 'always-multiline'],
        'indent': ['error', 4, { 'SwitchCase': 1 }],
        'linebreak-style': ['error', 'unix'],
        'no-case-declarations': 'off',
        'quotes': ['error', 'single'],
        'semi': ['error', 'always'],
        'space-before-function-paren': ['error', { 'anonymous': 'always', 'named': 'never' }],
        'strict': ['error', 'never'],
    },
};
