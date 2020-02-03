import React, {Component} from 'react';
import { Chat } from '../components/Chat/Chat';

const robotName = 'Robot';

export class ChatContainer extends Component {
    state = {
        chats: {
            1: {
                name: 'Chat 1', 
                messages: [
                    {name: "Ivan", content: "Hello from chat one!"},
                    {name: "Oleg", content: "Hi! chat one"},
                    {name: "Ivan", content: "Chat 1 is fine!"}
                ],
            },
            2: {
                name: 'Chat 2', 
                messages: [
                    {name: "Den", content: "It's chat2!"},
                    {name: "Valera", content: "Chat2-Chat2-Chat2!"},
                    {name: "Den", content: "Yes!"}
                ],
            },
            3: {
                name: 'Chat 3', 
                messages: [
                    {name: "Nobody", content: "Is anybody in chat3?!"},
                ],
            }
        }
    }

    componentDidMount(){

    }

    componentDidUpdate() {
        const {chats} = this.state;
        const {id} = this.props.match.params;
                
        if(id && chats[id]){
            const messages = this.state.chats[id].messages;
            const lastMessage = messages[messages.length-1];
        
            if(lastMessage && lastMessage.name !== robotName){
                setTimeout(() => this.hendleSendMessage(id)({name: robotName, content: "Hi, I'm Robot! It's chat " + id}), 1000);
            }
        }
    }

    hendleSendMessage = (id) => (message) =>{
        this.setState((state) => (
            {
            chats: {
            ...state.chats,
            [id]: {
                name: state.chats[id].name,
                messages: [
                    ...state.chats[id].messages,
                    message,
                ]
            },
        }}))
    }


    render () {
        const {chats} = this.state;
        const {id} = this.props.match.params;
        
        if(id && chats[id]){
            return <Chat {...{messages: chats[id].messages, onSendMessage: this.hendleSendMessage(id)}}/>
        }else{
            return <span>You did'n select the chat...(</span>
        }
    }
}