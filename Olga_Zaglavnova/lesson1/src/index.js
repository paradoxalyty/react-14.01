import React from "react";
import ReactDom from "react-dom";
import MessageList from './components/messageList';
import NewMessage from "./components/newMessage";
import css from 'style.css';

class ChatPage extends React.Component {
    constructor(props){
        super(props);
        this.state = {messages: []};

        this.addNewMessage = this.addNewMessage.bind(this);
    };
    updateData(value){
        console.log('index.js updateData IS WORKING', value);
    };
    /*addNewMessage(newMsg){
        this.messages.push(newMsg);
        console.log('index.js addNewMessage IS WORKING', this.messages);

    };*/
    render(){
        return <div className="container"><MessageList messages={this.messages} /><NewMessage updateData = {this.updateData.bind(this)} /></div>
    };
}

ReactDom.render(ChatPage, document.getElementById("root"));