const path = require("path");
const HtmlPlugin = require("html-webpack-plugin");
const MiniCssPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "./dist"),
  },
  module: {
    rules: [{ test: /\.css$/i, use: [MiniCssPlugin.loader, "css-loader"] }],
  },
  plugins: [
    new HtmlPlugin({ template: "./src/index.html" }),
    new MiniCssPlugin(),
  ],
};
