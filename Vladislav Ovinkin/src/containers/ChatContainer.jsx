import React, { Component } from "react";
import { Chat } from '../components/Chat/Chat';
import { connect } from 'react-redux';

const BOT_NAME = "chatBot";
class ChatContainer extends Component {

    timer = {};

    componentDidMount () {
    //     const {id, stateId} = this.props;

    //     if (id && stateId != id) {
    //         // onChangeId (id);
    //     }
    }

    // componentDidUpdate (prevState) {
    //     const {id, stateId, chats, onSendMessage, onChangeId} = this.props;
        
    //     // console.log ('ChatContainer DID_UPDATE!', id, stateId);

    //     if (stateId != id) {
    //         onChangeId (id);
    //     }

    //     if (chats[id] && prevState.id === id) {

    //         const nowNumMessages = chats[id].messages.length;
    //         const prevNumMessages = prevState.chats[id].messages.length;
    //         const lastMessage = chats[id].messages[nowNumMessages - 1];

    //         if (nowNumMessages !== prevNumMessages || prevState.id !== id) {
    //             clearTimeout (this.timer[id]);
    //         }

    //         if (lastMessage && prevNumMessages !== nowNumMessages && lastMessage.name !== BOT_NAME) {
    //             this.timer[id] = setTimeout(() => onSendMessage ({name: BOT_NAME, content: `Hi, ${lastMessage.name}, I'm a robot!`}), 2500);
    //         }
    //     }
    // }
    
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

export default connect (mapStateToProps) (ChatContainer);