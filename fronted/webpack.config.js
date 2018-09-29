const path = require('path')
// const webpack = require('webpack')

module.exports = {
  // エントリーポイントの設定。各モジュールを読み込んでメインの処理をするファイル
  entry: {
    application: './src/javascripts/components/messages/app.js',
  },
  // 出力先のファイルorパス
  output: {
    // dirnameを用いた絶対パスに入れ替える
    path: '/Users/taishi/test/React_test/app/assets/javascripts',
    filename: 'app.js'
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
