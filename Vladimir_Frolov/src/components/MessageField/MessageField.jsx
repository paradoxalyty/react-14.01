import React from "react";
import { Message } from "../Message/Message";
import './MessageField.css'
import {ChatForm} from '../ChatForm/ChatForm'

export class MessageField extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            message: '',
            error: false
        };
    }
    
    render() {
        if (this.props.messages) {
            let messages = this.props.messages.map((message, index) => <Message {...message} key={index} />);
            return <>
                <div className="MessageField">{messages}</div>
                <ChatForm addNewMessage={this.props.onSendMessage}/>
            </>
        }
        return <>
                Чат не выбран
            </>

    }
}