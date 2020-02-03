import React, {Component} from 'react';
import { Chat } from '../components/Chat/Chat';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {loadChats, addMessage} from '../store/chatAction';


const robotName = 'Robot';

// class ChatContainer extends Component {
    // state = {
    //     chats: {
    //         1: {
    //             name: 'Chat 1', 
    //             messages: [
    //                 {name: "Ivan", content: "Hello from chat one!"},
    //                 {name: "Oleg", content: "Hi! chat one"},
    //                 {name: "Ivan", content: "Chat 1 is fine!"}
    //             ],
    //         },
    //         2: {
    //             name: 'Chat 2', 
    //             messages: [
    //                 {name: "Den", content: "It's chat2!"},
    //                 {name: "Valera", content: "Chat2-Chat2-Chat2!"},
    //                 {name: "Den", content: "Yes!"}
    //             ],
    //         },
    //         3: {
    //             name: 'Chat 3', 
    //             messages: [
    //                 {name: "Nobody", content: "Is anybody in chat3?!"},
    //             ],
    //         }
    //     }
    // }

    // componentDidMount(){
    //     this.props.loadChats();
    // }

    // componentDidUpdate() {
    //     // const {chats} = this.state;
    //     // const {id} = this.props.match.params;
                
    //     // if(id && chats[id]){
    //     //     const messages = this.state.chats[id].messages;
    //     //     const lastMessage = messages[messages.length-1];
        
    //     //     if(lastMessage && lastMessage.name !== robotName){
    //     //         setTimeout(() => this.hendleSendMessage(id)({name: robotName, content: "Hi, I'm Robot! It's chat " + id}), 1000);
    //     //     }
    //     // }
    // }

    // hendleSendMessage = (id) => (message) =>{
    //     this.props.addMessage(id, message.name, message.content);
    //     this.setState((state) => (
    //         {
    //         chats: {
    //         ...state.chats,
    //         [id]: {
    //             name: state.chats[id].name,
    //             messages: [
    //                 ...state.chats[id].messages,
    //                 message,
    //             ]
    //         },
    //     }}))
    // }


    // render () {
    //     // console.log(this.props.chats)
    //     // return null;
    //     const {messages, id,addMessage} = this.props;

        
    //     if(messages){
    //         return <Chat {...{messages: messages, onSendMessage: addMessage}}/>
    //     }else{
    //         return <span>You did'n select the chat...(</span>
    //     }
    // }
// }

const mapStateToProps =({chatReducer}, {match}) => {
    // console.log(props)
    const id = match.params.id;
    return {
        messages: id ? chatReducer.chats[id] ? chatReducer.chats[id].messages : null : null,
        // id
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        loadChats, addMessage
    }, dispatch);
}

const mergeProps = (stateProps, dispatchProps, {match}) => {
    const id = match.params.id;
    return {
        ...stateProps,
        onSendMessage:  ({name, content}) => dispatchProps.addMessage(id, name, content),
    }
}

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(Chat);