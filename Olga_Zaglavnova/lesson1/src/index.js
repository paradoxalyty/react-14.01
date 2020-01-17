import React from "react";
import ReactDom from "react-dom";
import MessageList from './components/messageList';
import NewMessage from "./components/newMessage";
import css from 'style.css';

const messages = [{name:"Робот", content: "Привет. Человек!"},
    {name: "Я", content: "Привет, Робот!"},
    {name:"Робот", content: "Как дела?"},
    {name: "Я", content: "Да неплохо, идут..."},
    {name:"Робот", content: "Рад за тебя!"}
    ];

/*class ChatPage extends React.Component {
   /* constructor(props){
        super(props);
        this.state = {messages: []};

        //this.updateData = this.updateData.bind(this);
        //this.addNewMessage = this.addNewMessage.bind(this);
    };
    /*updateData(value){
        console.log('index.js updateData IS WORKING', value);
    };*/
    /*addNewMessage(newMsg){
        this.messages.push(newMsg);
        console.log('index.js addNewMessage IS WORKING', this.messages);

    };*/
 /*   render(){
        return <div className="container">
            <MessageList messages={this.state.messages} />
            <NewMessage updateData = {this.updateData} />
        </div>
    };*/
    /*render(){
       // return <div className="container"><MessageList messages={this.state.messages} /><NewMessage /></div>
        return <div className="container"><MessageList messages={messages} /><NewMessage /></div>
    };
};*/

    const ChatPage = <div className="container"><MessageList messages={messages} /><NewMessage /></div>

ReactDom.render(ChatPage, document.getElementById("root"));