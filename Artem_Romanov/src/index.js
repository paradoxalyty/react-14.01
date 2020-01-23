import React from "react";
import ReactDom from "react-dom";

const messages = [
    {name: "Ivan", content: "Hello"},
    {name: "Oleg", content: "Hi, how are you?"},
    {name: "Ivan", content: "I am well"}
]
const Message = ({name, content}) => <div><strong>{name}:</strong> {content}</div>;

function MessageList({messages}) {
    return messages.map((message, index) => <Message {...message} key={index}/>)
}

const Chat = (props) => {
    const sendMessage =(event) => {
        console.log("Button is clicked", event);
        messages.push({name: "Egor", content: "Hey " + (new Date).valueOf()})
        ReactDom.render(<Chat messages={messages}/>, document.getElementById("root"));
    }
    // Создаем обертку элементу, так как может быть только один ребенок а здесь 2
    //Оборачиваем все в React.Fragment - короткий способ записи - <>
    return <> 
    <MessageList messages={props.messages}/>
    <input type = "submit" value = "New massage" onClick = {sendMessage}/>
    </>
}

ReactDom.render(<Chat messages={messages}/>, document.getElementById("root"));




