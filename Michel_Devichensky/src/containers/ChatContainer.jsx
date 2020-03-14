import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {loadChats, addMessage} from '../store/chatAction'

import { Chat } from '../components/Chat/Chat'

// const ROBOT_NAME = 'Robot';
class ChatContainer extends Component {
    state = {
        chats: {
            1: {
                name: 'Chat_One',
                messages: [
                    { name: "Ivan", content: "work: chat one" }              
                ]
            },
            2: {
                name: 'Chat_Two',
                messages: [
                    { name: "Ivan", content: "work: chat two" },
                    { name: "Oleg", content: "work: chat two" },
                ]
            },
            3: {
                name: 'Chat_Three',
                messages: [
                    { name: "Ivan", content: "work: chat three" },
                    { name: "Oleg", content: "work: chat three" },
                    { name: "Ivan", content: "work: chat three" }
                ]
            },
        }
    }

    componentDidMount() {
        this.props.loadChats
    };

    // componentDidUpdate() {
        // const {chats} = this.state;
        // const {id} = this.props.match.params;
        // if(id && chats[id]) {
        //     const messages = this.state.chats[id].messages;
        //     const lastMessage = messages[messages.length -2];
        //         if(lastMessage && lastMessage.name == ROBOT_NAME) {
        //             clearTimeout(() => this.handleSendMessage(id)({ name: ROBOT_NAME, content: 'Hi im Robot ' + id }), 2000);
        //         }else{
        //             setTimeout(() => this.handleSendMessage(id)({ name: ROBOT_NAME, content: 'Hi im Robot ' + id }), 2000);
        //         }
        // }
    // };
    /**
     *  
     */
    handleSendMessage = (id) => (message) => {
       this.props.addMessage(id, message.name, message.content)
    }
    //     this.setState((state) => ({ 
    //         chats: {
    //             ...state.chats,
    //             [id]: {
    //                 name: state.chats[id].name,
    //                 messages: [
    //                     ...state.chats[id].messages,
    //                     message,
    //                 ]
    //             }
    //     }}))
    // };

    render() {   
        // return null;                                                                                                                                                                                  
        const { messages } = this.props;
        // const {id} = this.props.match.params;
        if(messages) {
            return <Chat { ...{ messages: chats[id].messages, onSendMessage: this.handleSendMessage(id) }}/>
        } else {
            return <span>Вы не выбрали чат</span>
        };
    };
};
/**
 * @param {chatReducer} 
 */
const mapStateToProps = ({ chatReducer }, {match}) => { 
    
    const id = match.params.id;  
    return {
        messages: id ? chatReducer.chats[id] ? chatReducer.chats[id].messages : null : null,
        id
    } 
};
/**
 * 
 * @param {dispatch} function передает Action в Reducer
 */
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        loadChats, addMessage
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ChatContainer);