import React from "react";
import {Message} from "./Message";

export class MessageField extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            messages: this.props.messages
        };
        this.handleOnClickAddMessage = this.handleOnClickAddMessage.bind(this);
    }

    componentDidUpdate() {
        if (this.state.messages[this.state.messages.length - 1]['name'] !== 'ROBOT') {
            this.addNewMessage("ROBOT", this.state.messages[this.state.messages.length - 1]['name'] + ", я робот")
        }
    }

    addNewMessage(name, text) {
        this.setState(({messages}) => {
            let new_messages = messages.slice();
            new_messages.push({name: name, content: text});
            return {messages: new_messages}
        })
    }

    handleOnClickAddMessage() {
        this.addNewMessage("Ivan", "Нормально")
    }

    render() {
        let messages = this.state.messages.map((message, index) => <Message {...message} key={index}/>);
        return <>{messages}
            <br/>
            <button onClick={this.handleOnClickAddMessage}>Добавить сообщение</button>
        </>
    }
}