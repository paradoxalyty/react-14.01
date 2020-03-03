import {Chat} from '../components/Chat/Chat';
import {connect} from 'react-redux';
import {bindActionCreators} from "redux";
import {addMessage} from "../store/chatAction";

// const ROBOT_NAME = 'Robot';

    // componentDidUpdate() {
    //     const {chats} = this.state;
    //     const {id} = this.props.match.params;
    //     if (id && chats[id]) {
    //         const messages = this.state.chats[id].messages;
    //         const lastMessage = messages[messages.length - 1];
    //         if (lastMessage && lastMessage.name !== ROBOT_NAME) {
    //             setTimeout(() => this.handleSendMessage(id)({name: ROBOT_NAME, content: "Hi, I'm Robot! It's chat " + id}), 1500)
    //         }
    //     }
    // }


const mapStateToProps = ({chatReducer}, {match}) => {
    const id = match.params.id;
    return {
        messages: id ? chatReducer.chats[id] ? chatReducer.chats[id].messages : null : null
    }
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({addMessage}, dispatch);
};

const mergeProps = (stateProps, dispatchProps, {match}) => {
    const id = match.params.id;
    return {
        ...stateProps,
        onSendMessage: ({name, content}) => dispatchProps.addMessage(id, name, content),
    }
};

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(Chat);