import {bindActionCreators} from "redux";
import {addMessage, loadChats} from "../store/chatAction";
import {connect} from "react-redux";
import {ChatList} from "../components/ChatList/ChatList";

const mapStateToProps = ({chatReducer}) => {
    return {
        chats: chatReducer.chats
    }
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({addMessage, loadChats}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(ChatList);
