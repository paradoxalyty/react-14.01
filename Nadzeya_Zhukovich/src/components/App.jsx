import React from "react";
import {MessageList} from "./MessageList";
import {MessageField} from "./MessageField";
import {Robot} from "../Robot";

export class App extends React.Component {
    constructor(props) {
        super(props);
        this.currentUser = 'Nadzeya';
        this.state = {
            messages: []
        };
    }

    messageSent(user, message) {
        let _messages = this.state.messages;
        _messages.push({name: user, content: message});
        this.setState({messages: _messages});
    };

    componentDidUpdate() {
        const lastPos = this.state.messages.length -1;
        if (this.state.messages[lastPos].name === this.currentUser) {
            const robot = new Robot();
            const robotAnswer = robot.answer(
                this.state.messages[lastPos].content,
                'I do not understand you!'
            );
            this.messageSent('robot', robotAnswer);
        }
    }

    render() {
        return <div>
            <MessageList messages={this.state.messages}/>
            <MessageField currentUser={this.currentUser} sendMessageHandler={this.messageSent.bind(this)}/>
        </div>
    }
}
