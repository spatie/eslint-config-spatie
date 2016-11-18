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
        'array-bracket-spacing': [2, 'never'],
        'brace-style': [2, '1tbs'],
        'comma-dangle': [2, 'always-multiline'],
        'comma-style': [2, 'last'],
        'eqeqeq': [2, 'always'],
        'indent': [2, 4, {
            'SwitchCase': 1
        }],
        'linebreak-style': [2, 'unix'],
        'keyword-spacing': 2,
        'prefer-const': 2,
        'new-parens': 2,
        'no-case-declarations': 0,
        'no-const-assign': 2,
        'no-whitespace-before-property': 2,
        'object-curly-spacing': [2, 'always'],
        'quotes': [2, 'single'],
        'semi': [2, 'always'],
        'space-before-blocks': 2,
        'space-before-function-paren': [2, { 'anonymous': 'always', 'named': 'never' }],
        'space-in-parens': [2, 'never'],
        'space-infix-ops': 2,
        'strict': [2, 'never'],
    },
};
