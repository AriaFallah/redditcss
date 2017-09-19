module.exports = ctx => ({
  plugins: {
    'postcss-import': {},
    'postcss-cssnext': {},
  },
  from: './src/style.css'
})
