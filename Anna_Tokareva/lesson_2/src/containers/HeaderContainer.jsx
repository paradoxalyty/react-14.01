import { Header } from "../components/Header/Header";
import { connect } from "react-redux";

const mapStateToProps = ({ chatReducer, userReducer }, { match }) => {
  const id = match.params.id;
  const name = chatReducer.chats[id]
    ? chatReducer.chats[id].name
    : `Чат не выбран`;
  const userName = userReducer.user.userName;
  return {
    name,
    userName
  };
};

export default connect(mapStateToProps)(Header);
