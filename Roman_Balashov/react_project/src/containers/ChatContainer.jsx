import { Chat } from "../components/Chat/Chat";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { addMessage } from "../store/chatActions";

const mapStateToProps = ({ chatReducer}, {match}) => {
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

const mergeProps = (stateProps, dispatchProps, {match}) => {
    const id = match.params.id;
    return {
        ...stateProps,
        sendMessage: ({name, text}) => dispatchProps.addMessage(id, name, text)
    }
}

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(Chat);