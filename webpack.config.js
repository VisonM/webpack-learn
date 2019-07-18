const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
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
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
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
  plugins: [
    new webpack.ProgressPlugin(),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: "管理输出"
    })
  ],
  resolve: {
    alias: {
      Util: path.resolve(__dirname, "src/util/"),
      Component: path.resolve(__dirname, "src/component/"),
      Assets: path.resolve(__dirname, "src/assets")
    }
  },
  devtool: "inline-source-map",
  devServer: {
    contentBase: "./dist",
    compress: true,
    hot: true,
    port: 9000,
    host: "0.0.0.0",
    allowedHosts: ["www.baidu.com", "easymock.com"],
    proxy: {
      "/api": {
        pathRewrite: {
          "^/api": ""
        },
        target: "http:localhost:8081",
        bypass: function(req, res, proxyOptions) {
          if (req.headers.accept.indexOf("html") !== -1) {
            console.log(
              "Skipping proxy for browser request but still proxy api request."
            );
            return "/index.html";
          }
        },
        changeOrigin: true,
        secure: false //接受HTTPS request
      }
    }
  }
};
