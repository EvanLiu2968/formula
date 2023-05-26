const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = () => {
  return {
    entry: './src/main.js',
    plugins: [new HtmlWebpackPlugin({ template: "src/index.html" })],
    // output: {
    //   filename:'build.js',
    //   path: path.resolve(__dirname,'dist')
    // },
    module: {
      rules: [
        {
          test: /\.css$/,
          use: [
            {
              loader: 'css-loader'
            }
          ]
        }
      ]
    }
  }
}
