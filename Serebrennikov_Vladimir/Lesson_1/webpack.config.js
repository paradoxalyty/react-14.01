const path = require("path");
// const webpack = require("webpack");
const HTMLWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    app: path.resolve(__dirname, "src", "index.js")
  },
  // context: path.resolve(__dirname, "src"),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "app.js"
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: path.resolve(__dirname, "src"),
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: ['@babel/env', "@babel/react"],
        }
      },
    ],
  },
  plugins: [
    new HTMLWebpackPlugin({ template: path.resolve(__dirname, "src", "index.html"), })
  ]

}