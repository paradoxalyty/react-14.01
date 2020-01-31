const path = require("path");
const HtmlWebpackPlaugin = require("html-webpack-plugin");

module.exports = {
    entry: path.resolve(__dirname, "1-src", "index.js"),
    output: {
        path: path.resolve(__dirname, "build"),
        filename: "index.js"
    },
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            include: path.resolve(__dirname, "1-src"),
            loader: 'babel-loader',
            exclude: /node_modules/,
            options: {
                presets: ['@babel/env', "@babel/react"],
                plugins: ["@babel/plugin-proposal-class-properties"]
            }



        }, {
            test: /\.s[ac]ss$/i,
            use: [
                // Creates `style` nodes from JS strings
                'style-loader',
                // Translates CSS into CommonJS
                'css-loader',
                // Compiles Sass to CSS
                'sass-loader',
            ],
        }, ],
    },
    devServer: {
        historyApiFallback: true
    },
    resolve: {
        extensions: ['.jsx', '.js']
    },
    plugins: [
        new HtmlWebpackPlaugin({ template: path.resolve(__dirname, "1-src", "index.html"), })
    ]
}