const path = require('path')

module.exports = {
  // webpack folder’s entry js — excluded from jekll’s build process.
  entry: './webpack/entry.js',
  output: {
    // we’re going to put the generated file in the assets folder so jekyll will grab it.
    path: path.join(__dirname, "assets/js"),
    filename: 'bundle.js'
  },
  node: {
    console: false,
    fs: 'empty',
    net: 'empty',
    tls: 'empty'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader', // ‘babel-loader’ is also a legal name to reference
        query: {
          presets: ['react', 'es2015', 'env']
        }
      }
    ]
  }
};