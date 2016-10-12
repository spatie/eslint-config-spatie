module.exports = {
    extends: [
        require.resolve('./index'),
        'plugin:react/recommended',
    ],
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
    },
    plugins: [
        'react',
    ],
    rules: {
        'react/no-danger': 'off',
        'react/no-did-mount-set-state': 'off'
    },
}
