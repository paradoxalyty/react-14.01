//import React, {Component} from 'react';
import {MessageField} from '../components/MessageField/MessageField';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {addMessage} from '../store/chatAction';

//const ROBOT_NAME = 'Robot';

    // componentDidUpdate() {
    //     // const {chats} = this.state;
    //     // const {id} = this.props.match.params;
    //     //
    //     // if (id && chats[id]) {
    //     //     const messages = this.state.chats[id].messages;
    //     //     const lastMessage = messages[messages.length - 1];
    //     //
    //     //     if (lastMessage && lastMessage.author !== ROBOT_NAME) {
    //     //         this.handleSendMessage(id)({author: ROBOT_NAME, content: "Don't bother me I'm a robot."});
    //     //     }
    //     // }
    // }

const mapStateToProps = ({chatReducer}, {match}) => {
    const id = match.params.id;
    return {
        messages: id ? chatReducer.chats[id] ? chatReducer.chats[id].messages : null : null
    }
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ addMessage }, dispatch);
};

const mergeProps = (stateProps, dispatchProps, {match}) => {
    const id = match.params.id;
    return {
        ...stateProps,
        onSendMessage: ({author, content}) => dispatchProps.addMessage(id, author, content),
    }
};

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(MessageField);