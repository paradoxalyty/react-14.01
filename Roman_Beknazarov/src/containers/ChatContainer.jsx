import {Chat} from '../components/Chat/Chat';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {addMessage} from '../store/chatAction';

const mapStateToProps = ({chatReducer}, {match}) => {
    const id = match.params.id;

         // let result;
         // if (id) {
         //     if (chatReducer.chats[id]) {
         //         result = chatReducer.chats[id].messages;
         //     } else {
         //         result = null;
         //     }
         // } else {
         //     result = null;
         // }

    return {
        // messages: result
        messages: id ? chatReducer.chats[id] ? chatReducer.chats[id].messages : null : null
    };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({addMessage}, dispatch);
};

const mergeProps = (stateProps, dispatchProps, {match}) => {
    const id = match.params.id;
    return {
        ...stateProps,
        onSendMessage: ({name, content}) => dispatchProps.addMessage(id, name, content),
    };
};

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(Chat);