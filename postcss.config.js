/* eslint-disable */
module.exports = ctx => ({
  parser: 'postcss-scss',
  plugins: {
    'postcss-sorting': {
      'properties-order': 'alphabetical',
    },
  },
});
