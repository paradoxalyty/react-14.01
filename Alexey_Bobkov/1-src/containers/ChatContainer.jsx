import { Layout } from '../components/Layout/Layout.jsx';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addMessage } from '../store/chatAction';



const mapStateToProps = ({ chatReducer }, { match }) => {
    const id = match.params.id;
    return {
        messages: id ? chatReducer.chats[id] ? chatReducer.chats[id].messages : null : null,
        chatName: chatReducer.chats[id].name,

    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ addMessage }, dispatch);
}

const mergeProps = (stateProps, dispatchProps, { match }) => {
    const id = match.params.id;
    return {
        ...stateProps,
        onSendMessage: ({ name, content }) => dispatchProps.addMessage(id, name, content),
    }
}
export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(Layout);

