// module.export 는 commonJS 스펙의 모듈을 정의 및 배포하는 방법

// module.exports = {
//   entry: './src/index.js'
// };
// const path = require('path');
let HtmlwebpackPlugin = require('html-webpack-plugin');
let MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: __dirname + '/dist',
    filename: 'main.js'
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'eslint-loader']
      },
      {
        test: /\.(sa|sc|c)ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          // 'style-loader',
          MiniCssExtractPlugin.loader,

          // Translates CSS into CommonJS
          'css-loader',

          //postCss로더
          "postcss-loader",

          // Compiles Sass to CSS
          'sass-loader',
        ],
      },
      {
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 4000,
              name: 'images/[name].[ext]',
              esModule: false
            }
          },
        ]
      },

    ]
  },
  plugins: [
    new HtmlwebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: 'main.css',
    })],
};