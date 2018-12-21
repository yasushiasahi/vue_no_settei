const HtmlWebpackPlugin = require("html-webpack-plugin")
const { VueLoaderPlugin } = require("vue-loader")
const { HotModuleReplacementPlugin } = require("webpack")

module.exports = {
  mode: "development",
  devtool: "inline-source-map",
  entry: "./src/main.js",
  devServer: {
    hot: true
  },
  module: {
    rules: [
      {
        enforce: "pre",
        test: /\.(js|vue)$/,
        exclude: /node_modules/,
        loader: "eslint-loader"
        // options: {
        //   formatter: require("eslint-friendly-formatter"),
        //   emitWarning: !config.dev.showEslintErrorsInOverlay
        // }
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: "babel-loader"
      },
      {
        test: /\.vue$/,
        use: "vue-loader"
      },
      {
        test: /\.(css|scss)$/,
        use: [
          {
            loader: "vue-style-loader",
            options: {
              singleton: true,
              sourceMap: true
            }
          },
          {
            loader: "css-loader",
            options: {
              modules: true,
              localIdentName: "[name]__[local]--[hash:base64:5]",
              sourceMap: true
            }
          },
          {
            loader: "postcss-loader",
            options: {
              sourceMap: true
            }
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: true
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/html/front_dev.html"
    }),
    new VueLoaderPlugin(),
    new HotModuleReplacementPlugin()
  ]
}
