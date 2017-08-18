var path = require('path')

module.exports = {
  entry: './src/index.jsx',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        loader: 'babel-loader',
        test: /\.jsx?$/,
        exclude: /node_modules/,
        options: {
          presets: ["env", "react"]
        }
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  }
}
