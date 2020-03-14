import React, { Component } from 'react';
import { Chat } from '../components/Chat/Chat';
import { connect } from 'react-redux';
class ChatContainer extends Component {
        
    render () {
        const {id, chats} = this.props;

        if (id && chats[id]) {
            return <Chat id={id} />;
        } else {
            return 'Чат не выбран.';
        }
    }
}

const mapStateToProps = ({chatReducer}) => ({
    chats: chatReducer.chats,
});

export default connect (mapStateToProps) (ChatContainer);