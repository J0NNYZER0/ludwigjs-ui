const Path = require('path'),
  HtmlWebPackPlugin = require("html-webpack-plugin")

module.exports = {
  target: 'web',
  mode: 'development',
  devServer: {
    contentBase: Path.join(__dirname, 'dist'),
    //compress: true,
    port: 9000
  },
  entry: Path.resolve(__dirname, 'index.js'),
  output: {
    path: Path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './template/index.ejs'
    })
  ]
}
