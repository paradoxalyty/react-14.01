const path = require("path");
const webpack = require('webpack');
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
   entry: path.resolve(__dirname, "static_src", "index.js"),
   output: {
       path: path.resolve(__dirname, "static", "build"),
       filename: 'app.js',
   },
module: {
    rules: [
        {
            test: /\.(js|jsx)$/,
            include: path.resolve(__dirname, "static_src"),
            loader: 'babel-loader',
            exclude: /node_modules/,
            options: {
                presets: ['@babel/env', "@babel/react"],
            }
        },
    ],
},
plugins: [
    new HtmlWebpackPlugin({ template: path.resolve(__dirname, "index.html"), })
]

};