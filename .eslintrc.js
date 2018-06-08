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
    'comma-dangle': 'off',
		'no-param-reassign': 'off',
    'func-names': 'off'
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
