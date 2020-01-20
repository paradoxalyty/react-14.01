import React, {Component} from "react";
// import ReactDom from "react-dom";
// import { MessageList } from './MessageList';

class ButtonSend extends Component {
    handleAdd = () => {
        const defaultMessage = {name: 'Tolik', content: "I'm ok!"};
        this.props.onSend (defaultMessage);
    }
    render () {
        return <button onClick={this.handleAdd}>Send</button>; 
    }
}

// let authorName = 'admin';

// const ButtonSend = (messages) => {
//     return <button onClick={sendMessage.bind (messages)}>Send</button>;
// }

// function sendMessage () {
//     this.messages.push ({name: authorName, content: "Normal'no"});    
//     ReactDom.render (<MessageList messages={ this.messages } />, document.getElementById ('root'));
// }

export {ButtonSend};