const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: {
        index: './src/index.js',
        home: './src/home.js',
      },
    mode: 'development',
    plugins:[
        new HtmlWebpackPlugin()
    ],
  };