module.exports = {
    root: true,
    extends: 'airbnb',
    rules: {
        indent: ['error', 4],
        'no-param-reassign': 0,
        'no-var': 'error',
        'comma-dangle': ["error", "never"],
        'import/no-extraneous-dependencies': 0,
        'no-plusplus': 0
    },
    env: {
        jasmine: true
    },
    globals: {
        document: true
    }
}
