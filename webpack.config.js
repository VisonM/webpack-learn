const path = require("path");
module.exports = {
  entry: {
    index: "./src/index.js"
  },
  output: {
    filename: "boundle.js",
    path: path.resolve(__dirname, "dist")
  },
  module: {
    rules: [{
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      // {
      //   test: /\.(png|gif|png|webp|svg)$/,
      //   use: ['file-loader']
      // },
      {
        test: /\.(png|gif|png|webp|svg)$/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 4000
          }
        }]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ['file-loader']
      },
      {
        test: /\.(csv|tsv)$/,
        use: ['csv-loader']
      },
      {
        test: /\.xml$/,
        use: ['xml-loader']
      }
    ]
  },
  resolve: {
    alias: {
      Util: path.resolve(__dirname, 'src/util/'),
      Component: path.resolve(__dirname, 'src/component/')
    }
  }

};