import ReactDom from 'react-dom';
import React from 'react';
import { MessageList } from './components/MessageList'

const userName = "CurrentUser"
const chatBotName = "ChatBot";
const defaultChatBotAnswer = `Hey! Don't bother me, ${userName}`

const messages = [
    {name: chatBotName, content: `Hello! My name is ${chatBotName}`},
]

const Chat = (props) => {
    const sendMessage = () => {
        const sendMessageField = document.getElementById('send-message-field');
        messages.push({name: userName, content: sendMessageField.value});
        sendMessageField.value = "";
        botAnswer();
        ReactDom.render(<Chat messages={messages} />, document.getElementById('root'));
    }

    const botAnswer = () => {
        messages.push({name: chatBotName, content: defaultChatBotAnswer})
    }

    return  <>
                <MessageList messages={props.messages} />
                <input type="text" placeholder="New message" id="send-message-field"/>
                <input type="submit" value="New message" onClick={sendMessage}/>
            </>
}

ReactDom.render(<Chat messages={messages} />, document.getElementById('root'));