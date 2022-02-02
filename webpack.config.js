const path = require("path");
const RefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");

module.exports = {
  name: "JayMarket",
  mode: "development",
  devtool: "eval",
  entry: {
    app: ["./client.jsx"],
  },
  module: {
    rules: [{
      test: /\.jsx?/,
      loader: "babel-loader",
      options: {
        presets: [
          ["@babel/preset-env", {
            targets: {
              browsers: ["> 5% in KR", "last 2 chrome versions"]
            },
          }], "@babel/preset-react"],
        plugins: [
          "react-refresh/babel",
        ]
      },
    }]
  },
  plugins: [
    // new webpack.LoaderOptionsPlugin({ debug: true }),
    new RefreshWebpackPlugin()
  ],
  output: {
    path: path.join(__dirname, "dist"),
    filename: "app.js",
    publicPath: "/dist/",
  },
  devServer: {
    // publicPath: "/dist/",

    devMiddleware: { publicPath: '/dist/' },
    static: { directory: path.resolve(__dirname) },
    hot: true,

  }
}