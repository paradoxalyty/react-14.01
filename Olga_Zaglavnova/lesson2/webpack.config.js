const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
module.exports = {
    entry: path.resolve(__dirname, "src", "index.js"),
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "index.js"
    },
    resolve: {
        modules: ['node_modules', 'src', 'components'],
        extensions: ['.js', '.jsx'],
    },
    module:{
        rules: [
            {
                test: /\.(js|jsx)$/,
                include: path.resolve (__dirname, "src"),
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: {
                    presets: ['@babel/env', "@babel/react"],
                    plugins: [
                        ["@babel/plugin-proposal-class-properties", { "loose": true }]
                    ]
                },
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
    plugins:[
        new HTMLWebpackPlugin({template: path.resolve(__dirname, "src", "index.html")})
    ]
}