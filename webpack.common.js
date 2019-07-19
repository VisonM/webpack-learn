const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const webpack = require("webpack");
module.exports = {
  entry: {
    index: "./src/index.js",
    print: "./src/print.js"
  },
  output: {
    library: "vision",
    libraryTarget: "umd",
    filename: "[name].boundle.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "/",
    auxiliaryComment: {
      root: "Root Comment",
      commonjs: "CommonJS Comment",
      commonjs2: "CommonJS2 Comment",
      amd: "AMD Comment"
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|vue|jsx)&/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"]
          }
        }
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader"
        })
      },
      // {
      //   test: /\.(png|gif|png|webp|svg)$/,
      //   use: ['file-loader']
      // },
      {
        test: /\.(png|gif|png|webp|svg)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 4000
            }
          }
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ["file-loader"]
      },
      {
        test: /\.(csv|tsv)$/,
        use: ["csv-loader"]
      },
      {
        test: /\.xml$/,
        use: ["xml-loader"]
      }
    ]
  },
  resolve: {
    alias: {
      Util: path.resolve(__dirname, "src/util/"),
      Component: path.resolve(__dirname, "src/component/"),
      Assets: path.resolve(__dirname, "src/assets")
    }
  },
  plugins: [
    new webpack.ProgressPlugin(),
    new CleanWebpackPlugin(),
    new ExtractTextPlugin("styles.css"),
    new HtmlWebpackPlugin({
      title: "webpack"
    })
  ]
};
