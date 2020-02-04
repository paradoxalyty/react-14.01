import { ChatList } from "../components/ChatList/ChatList";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { addChat } from "../store/chatAction";

const mapStateToProps = ({ chatReducer }) => {
  return {
    chats: chatReducer.chats
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ addChat }, dispatch);
};

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  return {
    ...stateProps,
    addChat: ({ name }) => dispatchProps.addChat(name)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(ChatList);
