import React from "react";
import { Header } from '../Header/Header';
import ChatList from '../ChatList/ChatList';
import { ChatContainer } from '../../containers/ChatContainer'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { loadChats, addMessage } from '../../store/chatAction';
import './Layout.css';

const Layout = (props) => {
    // const {chatList, stateId, onChangeId, onSendMessage, onChatAdd} = props;
    const {chats} = props;
    const id = +props.match.params.id;

    console.log ('Component: Layout', props, id);

    return (
        <div className="layoutHeader">
            <Header text={(id && chats[id]) ? chats[id].name : "выберите чат"} />
            <div className="layoutChatList">
                {/* <ChatList chatList={chatList} pathId={id} onChatAdd={onChatAdd} /> */}
                <ChatList pathId={id} />
                {/* <ChatContainer chats={chats} id={id} /> */}
            </div>
        </div>);
}

const mapStateToProps = ({chatReducer}) => ({
    chats: chatReducer.chats,
})

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        loadChats, addMessage
    }, dispatch);
}

export default connect (mapStateToProps, mapDispatchToProps) (Layout);