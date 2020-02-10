// import React, { Component } from 'react';
import { Chat } from '../components/Chat/Chat';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {  addMessage } from '../store/chatAction';

const mapStateToProps = ({chatReducer}, {match}) => {
    const id = match.params.id;
    return {
    messages: id ? chatReducer.chats[id] ? chatReducer.chats[id].messages : null : null,
}

}
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        addMessage
    }, dispatch);
    
}
const mergeProps = (stateProps, dispatchProps, {match}) => {
    const id = match.params.id;
    return  {
        ...stateProps,
        onSendMessage: ({name, content}) => dispatchProps.addMessage(id, name, content),
    }

}
export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(Chat);