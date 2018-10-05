const path = require('path')

module.exports = {
  entry: {
    'chatRoom': './src/javascripts/chatRoom.js',
    'searchForm': './src/javascripts/searchForm.js'
  },
  // [name]にはentryポイントのkeyが挿入される
  output: {
    path: path.resolve(__dirname, '../app/assets/javascripts'),
    filename: '[name].bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
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
