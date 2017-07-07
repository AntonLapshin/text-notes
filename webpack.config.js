const path = require("path");

module.exports = {
  entry: {
    app: './src/index.js',
    vendor: ['react', 'react-dom']
  },

  output: {
    path: path.resolve(__dirname, 'public'),
    filename: '[name].bundle.js'
  },

  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  }
}