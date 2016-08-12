module.exports = {
    root: true,
    extends: 'airbnb',
    rules: {
        indent: ['error', 4],
        'no-param-reassign': 0,
        'no-var': 'error',
        'comma-dangle': ["error", "never"],
    },
    env: {
        jasmine: true
    },
    globals: {
        document: true
    }
}
