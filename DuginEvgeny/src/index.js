
import React from "react";
import ReactDom from "react-dom";


const messages = [
    { name: "Спанч Боб", content: "Hello!" },
    { name: "Сквидвард", content: "Hi, how are you?" },
    { name: "Патрик Стар", content: "I am well" }
]
const Message = ({ name, content }) => <div><strong>{name}:</strong> {content}</div>;
function MessageList({ messages }) {
    return messages.map((message, index) => <Message {...message} key={index} />)
}

const Chat = (props) => {
    const sendMessage = (event) => {
        console.log("Button is clicked", event);
        messages.push({ name: "Gary", content: "Where my food?" + (new Date).valueOf() });
        ReactDom.render(<Chat messages={messages} />, document.getElementById("root"))
    }
    return <>
        <MessageList messages={props.messages} />
        <input type="sumbit" value="New message" onClick={sendMessage} />
    </>
}

ReactDom.render(<Chat messages={messages} />, document.getElementById("root"));


//React element - componet

//Нам понадобится два пакета, импортируем их
//Первый пакет - сам реакт
// import React from "react";
//Второй пакет - реакт дом
// import ReactDOM from "react-dom";

//NO JSX
//////////////////////////// Первый вариант создания элемента

//Получаем доступ к нашей точке входа (будем рендерить сюда)
// const root = document.getElementById("root");

// Render - эо свойство, у которого есть два значения (что отрендерить и куда отрендерить(куда - root))
// createElement() - это функция, которая принимает значения
// Создадим ссылку
// ReactDOM.render(React.createElement("a", {"href": "mail.ru"}, "Name link"), root); 

//////////////////////////// Второй вариант создания элемента
// Создадим функцию
// Название придумываем произвольно, но пишем с большой буквы
// function Link(){
//     return React.createElement("a", {"href": "mail.ru"}, "Name link"); 
// }
// ReactDOM.render(React.createElement(Link), document.getElementById("root")); 

//////////////////////////// Третий вариант создания элемента
// также в наш компонент мы можем передать какие-то свойства например title это называется props

// function Link(props){
//     return React.createElement("a", {"href": "https://" + props.href},props.title); 
// }
// ReactDOM.render(React.createElement(Link, {title:"Name link", href: "google.com"}), document.getElementById("root")); 



// WITH JSX
// Исключаем из кода createElement чтобы было проще, понятнее
// Для этого в реакте был придумам JSX
// Babel - транспилятор который занимается переводом


// function Link(props) {

//     return <a href={"https://" + props.link} > {props.title}</a>
// }

// ReactDOM.render(<Link title="Name link" link="google.com"></Link>, document.getElementById("root")); 
// Можем убрать в конце </Link> и вместо него поставить />
// ReactDOM.render(<Link title="Name link" link="google.com" />, document.getElementById("root")); 


//Упрощаем наш код, используем стелочные функции
// const Link = (props) => <a href={"https://" + props.link} > {props.title}</a>;
// ReactDOM.render(<Link title="Name link" link="google.com" />, document.getElementById("root")); 