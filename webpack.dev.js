const merge = require("webpack-merge");
const common = require("./webpack.common");
module.exports = merge(common, {
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
});
