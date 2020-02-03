import { Chat } from "../components/Chat/Chat";
import { connect } from "react-redux";
import { bindActionCreators, compose } from "redux";
import { addMessage } from "../actions/chatActions";
import React, { Component } from "react";

class ChatContainer extends Component {
    componentDidMount() {
    }
    sendMessage = (message) => {
        this.props.sendMessage(message)
    }
    render() {
        return (<Chat messages={this.props.messages} sendMessage={this.sendMessage} />)
    }
}

const mapStateToProps = ({ chatReducer }, { match }) => {
    const id = match.params.id;
    return {
        messages: id ? chatReducer.chats[id] ? chatReducer.chats[id].messages : null : null,
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        addMessage,
    }, dispatch);
}

const mergeProps = (stateProps, dispatchProps, { match }) => {
    const id = match.params.id;
    return {
        ...stateProps,
        sendMessage: ({ name, text }) => dispatchProps.addMessage(id, name, text),
    }
}

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(ChatContainer);