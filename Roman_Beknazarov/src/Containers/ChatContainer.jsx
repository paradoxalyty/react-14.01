import React, {Component} from 'react';
import { MessageField } from '../components/MessageField/MessageField';

const ROBOT_NAME = 'Robot';

export class ChatContainer extends Component {
    state = {
        messages: [
            {author: "Robot", content: "Hello!"},
            {author: "Robot", content: "Hi, how are You?"}
        ],
    };

    componentDidUpdate(prevProps, prevState, snapshot) {
        const lastMessage = this.state.messages[this.state.messages.length - 1];

        if(lastMessage.author !== ROBOT_NAME) {
            this.handleSendMessage({ author: ROBOT_NAME, content: "Don't bother me I'm a robot."});
        }
    }

    handleSendMessage = (message) => {
        this.setState((state) => ({messages: [...state.messages, message]}));
    };

    render() {
        const {messages} = this.state;

        return <MessageField {...{messages, onSendMessage: this.handleSendMessage}}/>
    }
}