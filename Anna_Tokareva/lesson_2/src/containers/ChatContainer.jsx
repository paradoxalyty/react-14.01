//import React, { Component } from "react";
import { Chat } from "../components/Chat/Chat";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { addMessage } from "../store/chatAction";

const robot = {
  name: "Робот",
  content: "Привет! Я робот."
};

/*
class ChatContainer extends Component {
  /*
  state = {
    chats: {
      1: {
        name: "Чат 1",
        messages: [
          { name: "Иван", content: "Привет!" },
          { name: "Петр", content: "Привет, как дела?" },
          { name: "Иван", content: "Хорошо, спасибо." }
        ]
      },
      2: {
        name: "Чат 2",
        messages: [
          { name: "Иван", content: "Привет!" },
          { name: "Иван", content: "Как дела?" }
        ]
      },
      3: {
        name: "Чат 2",
        messages: []
      }
    }
  };
  */

//componentDidMount() {
//  this.props.loadChats();
//}

/*
  componentDidUpdate(prevProps, prevState) {
    const { chats } = this.state;
    const { id } = this.props.match.params;
    if (id && chats[id]) {
      const messages = this.state.chats[id].messages;
      const lastMessage = messages[messages.length - 1];
      const prevMessages = prevState.chats[id].messages;
      const prevStateLengthMessages = prevState.chats[id].messages.length;
      const prevLastMessage = prevMessages[prevMessages.length - 1];
      if (
        lastMessage &&
        lastMessage.name === "Я" &&
        (!prevStateLengthMessages || prevLastMessage.name !== "Я")
      ) {
        setTimeout(
          () =>
            this.handleSendMessage(id)({
              name: robot.name,
              content: robot.content
            }),
          500
        );
      }
    }
    
  }
*/
//handleSendMessage = id => message => {
//  this.props.addMessage(id, message.name, message.content);
/*
    this.setState(state => ({
      chats: {
        ...state.chats,
        [id]: {
          name: state.chats[id].name,
          messages: [...state.chats[id].messages, message]
        }
      }
    }));
    */
//};
/*
  render() {
    const { messages, id, addMessage } = this.props;
    if (id && messages) {
      return (
        <Chat
          {...{
            messages: messages,
            onSendMessage: addMessage
          }}
        />
      );
    } else {
      return <span>Необходимо выбрать чат.</span>;
    }
  }
}
*/

const mapStateToProps = ({ chatReducer }, { match }) => {
  const id = match.params.id;
  return {
    messages: id
      ? chatReducer.chats[id]
        ? chatReducer.chats[id].messages
        : null
      : null
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ addMessage }, dispatch);
};

const mergeProps = (stateProps, dispatchProps, { match }) => {
  const id = match.params.id;
  return {
    ...stateProps,
    onSendMessage: ({ name, content }) =>
      dispatchProps.addMessage(id, name, content)
  };
};

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(Chat);
