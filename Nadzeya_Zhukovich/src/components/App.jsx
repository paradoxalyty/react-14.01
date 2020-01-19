import React from "react";
import {MessageList} from "./MessageList";
import {MessageField} from "./MessageField";

export class App extends React.Component {
    constructor(props) {
        super(props);
        this.currentUser = 'Nadzeya';
        this.state = {
            messages: [
                {name: this.currentUser, content: "Hello!"},
                {name: "Oleg", content: "Hi, how are you!"},
            ]
        };
    }

    messageSent(message) {
        let _messages = this.state.messages;
        _messages.push({name: this.currentUser, content: message});
        this.setState({messages: _messages});
    };

    render() {
        return <div>
            <MessageList messages={this.state.messages}/>
            <MessageField sendMessageHandler={this.messageSent.bind(this)}/>
        </div>
    }
}
