const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: path.resolve(__dirname, "src", "index.js"),
    output:{
        path: path.resolve(__dirname, "dist"),
        filename: "index.js"
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,//Условия проверки файлов тоесть файлы с расширением .js и .jsx
                include: path.resolve(__dirname, "src"),//Указываем папку которую нужно проверять "src"
                loader: 'babel-loader',//Мы говорим что используем 'babel-loader'
                exclude: /node_modules/,//За исключением папки /node_modules/
                options: {
                  presets: ['@babel/env', "@babel/react"],// Пресеты которые мы используем '@babel/env', "@babel/react"
                }
            },
        ],
    }, 
    plugins: [
        new HTMLWebpackPlugin({template: path.resolve(__dirname, "src", "index.html")})
    ]
}