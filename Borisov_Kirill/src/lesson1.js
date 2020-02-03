import ReactDOM from "react-dom";
import React from "react";

/* 
function Link(props) {
    return React.createElement("a", { href: props.link }, props.title);
}

const Link = ({title, link}) => <a href={link}>{title}</a>;

ReactDOM.render(<Link title="Яндекс" link="https://ya.ru" />, document.getElementById("root"));
*/

const messages = [ 
    { name: "Фёдор Михайлович", content: "Вацап май френд?"},
    { name: "Арсений", content: "Да помаленьку, всё нормально. Энд ю?"},
    { name: "Фёдор Михайлович", content: "Вот решил изучить РеактJS"},
    { name: "Арсений", content: "Чудить изволите, Фёдор Михайлович?"},
    { name: "Фёдор Михайлович", content: "Изволю, Сеня, юр гад дэм райт"}
];

const Message = ({name, content}) => <div><strong>{name}:</strong> {content}</div>;

const MessageList = ({messages}) => {
    return messages.map((message, index) => <Message name={message.name} content={message.content} key={index}/>)
}

ReactDOM.render(<MessageList messages={messages} />, document.getElementById("root"));