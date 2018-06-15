module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    '@vue/airbnb'
  ],
  rules: {
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'comma-dangle': 'off',
		'no-param-reassign': 'off',
    'func-names': 'off',
    'no-mixed-operators': 'off',
    'padded-blocks': 'off'
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
