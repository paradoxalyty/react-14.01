import { Header } from "../components/Header/Header";
import { connect } from "react-redux";

const mapStateToProps = ({ chatReducer }, { match }) => {
  const id = match.params.id;
  const name = chatReducer.chats[id]
    ? chatReducer.chats[id].name
    : `Чат не выбран`;
  return {
    name: name
  };
};

export default connect(mapStateToProps)(Header);
