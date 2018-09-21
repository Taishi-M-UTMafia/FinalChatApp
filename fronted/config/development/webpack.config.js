// const path = require('path')
// const webpack = require('webpack')

module.exports = {
  devtool: 'inline-source-map',
  mode: 'development',
  entry: {
    application: './src/javascripts/comment_box.js',
  },
  output: {
    path: '/Users/taishi/test/React_test/app/assets/javascripts',
    filename: 'comment_box.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"]
          }
        }
      }
    ]
  }
}
