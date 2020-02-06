import React, { Component } from "react";
import { Chat } from '../components/Chat/Chat';

const BOT_NAME = "chatBot";

export class ChatContainer extends Component {

    // timer = null;

    componentDidMount () {
        const {onSendMessage, onChatChange} = this.props;
        const {id} = this.props;
        onChatChange (id);
        // onSendMessage ({name: "Владислав", content: "Ершы!"});
    }
    //timer = null;

    componentDidUpdate () {
        // const {id} = this.props;
        // const {chats} = this.props;
        // const {onSendMessage} = this.props;
        // clearTimeout (this.timer);
        
        // if (chats[id]) {
        //     const lastMessage = chats[id].messages[chats[id].messages.length - 1];
        
        //     if (lastMessage && lastMessage.name !== BOT_NAME) {
        //         this.timer = setTimeout(() => onSendMessage(id) ({name: BOT_NAME, content: `Hi, ${lastMessage.name}, I'm a robot!`}), 2000);
        //     }
        // }
    }
    
    componentWillUnmount () {
        // clearTimeout (this.timer);
    }

    render () {
        const {chats} = this.props;
        const {id} = this.props;
        const {onSendMessage} = this.props;

        console.log (id, chats[id]);

        if (id && chats[id]) {
            return <Chat {...{messages: chats[id].messages, onSendMessage: onSendMessage}} />
        } else {
            return "Ошибка: необходимо выбрать номер чата.";
        }
    }
}