import React, {Component} from 'react';
import {Chat} from '../components/Chat/Chat'
import {ChatList} from '../components/ChatList/ChatList'

export const ROBOT_NAME = 'Robot';

export class ChatContainer extends Component {
    componentWillUnmount() {
        if (this.timeout) clearTimeout(this.timeout);
    }

    componentDidUpdate() {
        const {chats} = this.props;
        const {id} = this.props.match.params;
        if (id && chats[id]) {
            const messages = this.props.chats[id].messages;
            const lastMessage = messages[messages.length - 1];

            if (lastMessage && lastMessage.name !== ROBOT_NAME) {
                if (this.timeout) clearTimeout(this.timeout);
                this.timeout = setTimeout(() => this.props.handleSendMessage(id)(ROBOT_NAME, "Hi, I'm robot! it's chat " + id), 2000)
            }
        }
    }

    render() {
        const {chats} = this.props;
        const {id} = this.props.match.params;
        if (id && chats[id]) {
            return <Chat {...{messages: chats[id].messages, onSendMessage: this.props.handleSendMessage(id)}} />
        } else {
            return <span>Вы не выбрали чат</span>
        }
    }
}