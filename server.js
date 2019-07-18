const express = require("express");
const app = express();

const webpack = require("webpack");
const webpackDevMiddleware = require("webpack-dev-middleware");
const config = require("./webpack.config");
const compiler = webpack(config);

app.use(
  webpackDevMiddleware(compiler, {
    path: config.output.publicPath
  })
);
app.listen(3001, () => {
  console.log("server is listening on port 3000 !");
});
