import React, { Component } from "react";
import { Chat } from '../components/Chat/Chat';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addMessage } from '../store/chatAction';

const BOT_NAME = "chatBot";
class ChatContainer extends Component {

    timer = {};

    componentDidUpdate (prevState) {
        // const {id, chats} = this.props;
        // const prevId = prevState.id;
        // const prevChats = prevState.chats;

        // if (chats[id] && prevId === id) {
        //     const nowNumMessages = chats[id].messages.length;
        //     const prevNumMessages = prevChats[id].messages.length;
        //     const lastMessage = chats[id].messages[nowNumMessages - 1];

        //     if (nowNumMessages !== prevNumMessages || prevId !== id) {
        //         clearTimeout (this.timer[id]);
        //     }

        //     if (lastMessage && prevNumMessages !== nowNumMessages && lastMessage.name !== BOT_NAME) {
        //         const content = `Hi, ${lastMessage.name}, I'm a robot!`;
        //         this.timer[id] = setTimeout(() => this.props.addMessage (id, BOT_NAME, content), 2500);
        //     }
        // }
    }
    
    componentWillUnmount () {
        Object.keys (this.timer).map (id => {
            clearTimeout (this.timer[id])
        })
    }
        
    render () {
        const {id, chats} = this.props;

        // console.log (this.props);

        if (id && chats[id]) {
            return <Chat id={id} />
        } else {
            return "Чат не выбран.";
        }
    }
}

const mapStateToProps = ({chatReducer}) => ({
    chats: chatReducer.chats,
})

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        addMessage
    }, dispatch);
}

export default connect (mapStateToProps, mapDispatchToProps) (ChatContainer);