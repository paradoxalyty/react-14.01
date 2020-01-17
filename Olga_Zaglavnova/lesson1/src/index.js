import React from "react";
import ReactDom from "react-dom";
import MessageList from './components/messageList';
import NewMessage from "./components/newMessage";
import css from 'style.css';

class ChatPage extends React.Component {
    constructor(props){
        super(props);
        this.state = {messages: [{name:"Робот", content: "Привет. Человек!"},
                {name: "Я", content: "Привет, Робот!"},
                {name:"Робот", content: "Как дела?"},
                {name: "Я", content: "Да неплохо, идут..."},
                {name:"Робот", content: "Рад за тебя!"}
            ]};

        this.addNewMessage = this.addNewMessage.bind(this);
    }

    addNewMessage(newMsg){
        this.state.messages.push(newMsg);
        this.forceUpdate();
        console.log('index.js addNewMessage IS WORKING', this.state.messages);
    }

    render(){
        return <div className="container">
                <MessageList messages={this.state.messages} />
            <NewMessage addMessage={this.addNewMessage} />
            </div>
    }
}

const chatCode = <ChatPage />

ReactDom.render(chatCode, document.getElementById("root"));