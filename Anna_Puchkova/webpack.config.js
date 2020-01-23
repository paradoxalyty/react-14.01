const path = require("path"),
      HtmlWebpackPlugin = require("html-webpack-plugin"),
      MiniCssExtractPlugin = require('mini-css-extract-plugin'),
      OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin'),
      UglifyJsPlugin = require('uglifyjs-webpack-plugin');


module.exports = {
    entry: path.resolve(__dirname, "src", "index.js"),
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "index.js"
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
                    plugins: ['@babel/plugin-proposal-class-properties']
                }
            },
            {
                test: /\.css$/,
                use: [
                  MiniCssExtractPlugin.loader,
                  'css-loader',
                  'postcss-loader',
                ],
              },
              {
                test: /\.(gif|png|jpe?g)$/,
                use: [
                  {
                    loader: 'file-loader',
                    options: {
                      name: '[hash].[ext]',
                      outputPath: 'img',
                    }
                  }
                ]
              },
              {
                test:/\.(s*)css$/,
                use:['style-loader','css-loader', 'sass-loader']
              }       
        ],
    },
    resolve: {
        extensions: ['.js', '.jsx'],
      },
      optimization: {
        minimizer: [
            new UglifyJsPlugin({
                cache: true,
                parallel: true,
                sourceMap: true,
            }),
            new OptimizeCSSAssetsPlugin({})
        ],
    },    
    plugins: [
        new HtmlWebpackPlugin({ template: path.resolve(__dirname, "src", "index.html"), }),
        new MiniCssExtractPlugin({
            filename: 'style.css',
          }),
        
    ],
};
