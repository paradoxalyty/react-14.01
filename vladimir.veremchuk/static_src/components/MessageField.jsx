import React from "react";
import Message from './Message.jsx';

class MessageField extends React.Component {
    state = {
        messages : [
            {name: "Ivan", content: "Hello!"},
            {name: "Oleg", content: "Hi, how are you?"},
            {name: "Ivan", content: "I am well"}
        ]
    };

    componentDidUpdate() {
        let a = this.state.messages[Object.keys(this.state.messages)[Object.keys(this.state.messages).length - 1]]
        console.log(a.name);
        if (a.name != "ChatBot") {setTimeout(()=>
        this.setState({ messages: [...this.state.messages, {name: "ChatBot", content: "TestAnswer"}]}),1000
        )
        }
    };

    handleClickBot = () => {
        this.setState({ messages: [...this.state.messages, {name: "ChatBot", content: "Test"}]})
    };

    handleClickUser = () => {
        this.setState({ messages: [...this.state.messages, {name: "User", content: "Test"}]})
    };

    render() {
        const messageElements = this.state.messages.map((message, index) => (
            <Message key={index} name={message.name} content={message.content} />
        ));

        return <div>
            {messageElements}
            <button onClick={this.handleClickBot}>Отправить сообщение от имени бота</button>
            <button onClick={this.handleClickUser}>Отправить сообщение от имени пользователя</button>
            </div>
    }
}

export default MessageField;