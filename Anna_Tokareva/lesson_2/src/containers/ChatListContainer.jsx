import { ChatList } from "../components/ChatList/ChatList";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { addChat, deleteChat } from "../store/chatAction";
import { push } from "connected-react-router";

const mapStateToProps = ({ chatReducer }) => {
  const chats = Object.keys(chatReducer.chats).map(id => ({
    id,
    name: chatReducer.chats[id].name
  }));
  const activeChat = chatReducer.activeChat;
  return {
    chats,
    activeChat
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ addChat, deleteChat, push }, dispatch);
};

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  return {
    ...stateProps,
    addChat: ({ name, chatId }) => dispatchProps.addChat(name, chatId),
    deleteChat: chatId => dispatchProps.deleteChat(chatId),
    push: location => dispatchProps.push(location)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(ChatList);
