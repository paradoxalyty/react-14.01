import React from "react";
import Message from "./Message";

export default class MessageList extends React.Component {
    state = {
        messages: [
            {name: "Ivan", content: "Hello!"},
            {name: "Oleg", content: "Hi, how are you?"},
            {name: "Ivan", content: "I am well1"},
            {name: "Ivan", content: "I am well1"},
        ]
    };

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.state.messages[this.state.messages.length - 1].name !== "Robot"){
            setTimeout(() => {
                let message = {name: "Robot", content: "Stupid robot message"};
                this.setState({
                    messages: [...this.state.messages, message]
                })
            }, 1000);
        }
    }

    handleClick = () => {
        let message = {name: "Ivan", content: "My message"};
        this.setState({messages: [...this.state.messages, message]});
    };

    render() {
        let messageList = this.state.messages.map((data, i) => <Message content={ data.content } name={ data.name } key = { i } />);
        return (
            <div>
                { messageList }
                <button onClick={ this.handleClick }>Send message</button>
            </div>
        )
    }
}