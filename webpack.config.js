module.exports = {
  module: {
    rules: [
      {
        test: /\.(svg|eot|woff|woff2|ttf)$/,
        type: 'asset/resource',
        generator: {
          filename: 'compiled/fonts/[hash][ext][query]'
        }
      }
    ]
  }
}
