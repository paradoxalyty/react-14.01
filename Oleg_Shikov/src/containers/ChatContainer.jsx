// import React, { Component } from 'react';
import { Chat } from '../components/Chat/Chat'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addMessage } from '../store/chatAction';

// const ROBOT_NAME = 'Robot';
// class ChatContainer extends Component {
    // state = {
    //     chats: {
    //         1: {
    //             name: 'Chat 1',
    //             messages: [
    //                 { name: "Ivan", content: "Hello! It's chat one!" },
    //                 { name: "Ivan", content: "How are you?" },
    //             ]
    //         },
    //         2: {
    //             name: 'Chat 2',
    //             messages: [
    //                 { name: "Den", content: "Hi from chat 2" },
    //             ]
    //         },
    //         3: {
    //             name: 'Chat 3',
    //             messages: []
    //         }
    //     },
    // }

    // componentDidMount() {
    //     this.props.loadChats();
    // }

    // componentDidUpdate() {
    // const { chats } = this.state;
    // const { id } = this.props.match.params;
    // if (id && chats[id]) {
    //     const messages = this.state.chats[id].messages;
    //     const lastMessage = messages[messages.length - 1];

    //     if (lastMessage && lastMessage.name !== ROBOT_NAME) {
    //         setTimeout(() => this.handleSendMessage(id)({ name: ROBOT_NAME, content: "Hi, I'm robot! it's chat " + id }), 2000)
    //     }
    // }
    // }

    // handleSendMessage = (id) => (message) => {
    //     this.props.addMessage(id, message.name, message.content);
        //     this.setState((state) => (
        //         {
        //             chats: {
        //                 ...state.chats,
        //                 [id]: {
        //                     name: state.chats[id].name,
        //                     messages: [
        //                         ...state.chats[id].messages,
        //                         message,
        //                     ]
        //                 },
        //             }
        //         }))
    // }

//     render() {
//         const { messages, id, addMessage} = this.props;
//         if (messages) {
//             return <Chat {...{ messages: messages, onSendMessage:  addMessage}} />
//         } else {
//             return <span>Вы не выбрали чат</span>
//         }
//     }
// }

const mapStateToProps = ({ chatReducer }, {match}) => {
    const id = match.params.id;
    return {
        messages: id ? chatReducer.chats[id] ? chatReducer.chats[id].messages : null : null,
        // id
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
      addMessage
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