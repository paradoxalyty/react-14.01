import React, { Component } from "react";
import { Chat } from '../components/Chat/Chat';

const BOT_NAME = "chatBot";
export class ChatContainer extends Component {

    timer = null;

    componentDidUpdate (prevState) {
        const {id} = this.props;
        const {chats} = this.props;
        const {onSendMessage} = this.props;
        
        if (chats[id] && prevState.id === id) {

            const nowNumMessages = chats[id].messages.length;
            const prevNumMessages = prevState.chats[id].messages.length;
            const lastMessage = chats[id].messages[nowNumMessages - 1];

            if (nowNumMessages !== prevNumMessages || prevState.id !== id) {
                clearTimeout (this.timer);
            }

            if (lastMessage && prevNumMessages !== nowNumMessages && lastMessage.name !== BOT_NAME) {
                this.timer = setTimeout(() => onSendMessage ({name: BOT_NAME, content: `Hi, ${lastMessage.name}, I'm a robot!`}), 2500);
            }
        }
    }
    
    componentWillUnmount () {
        clearTimeout (this.timer);
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