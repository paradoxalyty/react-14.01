import React from 'react';
import { Message } from '../Message/Message';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addMessage } from '../../store/chatAction';
import './MessageList.css';


const MessageList = (props) => {
    const {id} = props;
    const {messages} = props.chats[id];

    // console.log (messages, id);

    return (<div className='messageList'>
        {messages.map ((message, index) => <Message {...message} key = { index } />)}
    </div>);
};

const mapStateToProps = ({chatReducer}) => ({
    chats: chatReducer.chats,
});

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        addMessage
    }, dispatch);
};

export default connect (mapStateToProps, mapDispatchToProps) (MessageList);