import { Header } from "../components/Header/Header";
import { connect } from "react-redux";

const mapStateToProps = ({ chatReducer, userReducer }, { match }) => {
  const chatId = match.params.chatId;
  const title = chatReducer.chats[chatId]
    ? chatReducer.chats[chatId].title
    : `Чат не выбран`;
  const userName = userReducer.user.userName;
  return {
    title,
    userName
  };
};

export default connect(mapStateToProps)(Header);
