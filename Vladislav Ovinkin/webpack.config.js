const path = require ("path");
const HtmlWebpackPlugin = require ("html-webpack-plugin");
const webpack = require ("webpack");

module.exports = {
    entry: path.resolve(__dirname, "src", "index.js"),
    output: {
        path: path.resolve (__dirname, "dist"),
        filename: 'app.js',
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                include: path.resolve (__dirname, 'src'),
                loader: 'babel-loader',
                exclude: /node-modules/,
                options: {
                    presets: ['@babel/env', '@babel/react'],
                    plugins: [
                        [
                            '@babel/plugin-proposal-class-properties',
                            {
                                "loose": true
                            }
                        ],
                    ]
                }
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin ({
            template: path.resolve(__dirname, "src", "index.html")
        })
    ],
    resolve: {
        extensions: ['.jsx', '.js']
    },
    devServer: {
        historyApiFallback: true
    },
    devtool: 'inline-source-map',
};
