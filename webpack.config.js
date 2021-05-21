// webpack config file

const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin')

module.exports={
  entry: path.join(__dirname, '/app/main.js'),
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, '/dist')
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: path.join(__dirname, './index.html')
    })
  ]
}
