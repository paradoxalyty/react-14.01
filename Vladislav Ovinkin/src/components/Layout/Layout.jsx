import React from "react";
import { Header } from '../Header/Header';
import ChatList from '../ChatList/ChatList';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {  addMessage } from '../../store/chatAction';
import ChatContainer from '../../containers/ChatContainer';
import './Layout.css';

const Layout = (props) => {
    const {chats, messages, id} = props;

    // console.log ('Component: Layout', props, messages);

    return (
        <div className="layoutHeader">
            <Header text={messages ? chats[id].name : ''} />
            <div className="layoutChatList">
                <ChatList pathId={id} />
                <ChatContainer id={id} />
            </div>
        </div>);
}

const mapStateToProps = ({chatReducer}, {match}) => {
    const id = +match.params.id;
    return {
        chats: chatReducer.chats,
        messages: id ? chatReducer.chats[id] ? chatReducer.chats[id].messages : null : null,
        id: id ? +id : null,
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        addMessage
    }, dispatch);
}

const mergeProps = (stateProps, dispatchProps, {match}) => {
    const id = +match.params.id;
    return {
        ...stateProps,
        onSendMessage: ({name, content}) => dispatchProps.addMessage (id, name, content),
    }
}

export default connect (mapStateToProps, mapDispatchToProps, mergeProps) (Layout);