//Установим плагин для работы с html код: npm i -D html-webpack-plugin
//После установки плагина подключим его 


//Обращаемся к стандартной библиотеке Node для того, чтобы слэщи подстроились под наш тип операционной системы
const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    //После того, как мы обратились к стандартной библиотеке Node выше, мы можем обратиться к resolve(принимает строчки и направляет их в правильный путь)
    //entry: __dirname + "/src/index.js"

    // СВОЙСТВА ВХОДА
    entry: path.resolve(__dirname, "src", "index.js"),
    // Т.е. функция resolve cама поймет какие нужно подставить слэши обычные или обратные / или \

    // СВОЙСТВА ВЫХОДА (куда будет собираться наш пакет)
    output: {
        //путь куда будем собирать
        path: path.resolve(__dirname, "dist"), //Dist название куда мы будем собирать тут может быть любое 
        filename: "index.js" // Название файла, которе мы хотим применить
    },
    plugins: [
        new HtmlWebpackPlugin({template: path.resolve(__dirname, "src", "index.html")})
      ]
}

