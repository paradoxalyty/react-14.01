import React from 'react';
import { Header } from '../Header/Header';
import ChatList from '../ChatList/ChatList';
import { connect } from 'react-redux';
import ChatContainer from '../../containers/ChatContainer';
import './Layout.css';

const Layout = (props) => {
    const {chats, messages, id} = props;

    return (
        <div className="layoutHeader">
            <Header text={messages ? chats[id].name : ''} />
            <div className="layoutChatList">
                <ChatList pathId={id} />
                <ChatContainer id={id} />
            </div>
        </div>);
};

const mapStateToProps = ({chatReducer}, {match}) => {
    const id = +match.params.id;
    return {
        chats: chatReducer.chats,
        messages: id ? chatReducer.chats[id] ? chatReducer.chats[id].messages : null : null,
        id: id ? +id : null,
    };
};

export default connect (mapStateToProps) (Layout);