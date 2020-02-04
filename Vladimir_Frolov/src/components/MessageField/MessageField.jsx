import React from "react";
import {Message} from "../Message/Message";
import './MessageField.css'

export class MessageField extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            message: '',
            error: false
        };
    }
    componentWillUnmount() {
        if (this.timeout) clearTimeout(this.timeout);
    }
    render() {
    
        let messages = this.props.messages.map((message, index) => <Message {...message} key={index}/>);
        return <>
            <div className="MessageField">{messages}</div>
        </>
    }
}