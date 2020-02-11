import {Chat} from '../components/Chat/Chat';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {addMessage} from '../store/chatActions'

const mapStateToProps = ({ chatReducer }, {match}) => {
    const id = match.params.id;
    return {
        messages: id ? chatReducer.chats[id] ? chatReducer.chats[id].messages : null : null,
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
      addMessage
    }, dispatch);
}

const mergeProps = (stateProps, dispatchProps, {match}) => {
    const id = match.params.id;
    return {
        ...stateProps,
        onSendMessage:  (name, content) => dispatchProps.addMessage(id, name, content),
    }
}

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(Chat);



// export const ROBOT_NAME = 'Robot';

// export class ChatContainer extends Component {
//     componentWillUnmount() {
//         if (this.timeout) clearTimeout(this.timeout);
//     }

//     componentDidUpdate() {
//         const {chats} = this.props;
//         const {id} = this.props.match.params;
//         if (id && chats[id]) {
//             const messages = this.props.chats[id].messages;
//             const lastMessage = messages[messages.length - 1];

//             if (lastMessage && lastMessage.name !== ROBOT_NAME) {
//                 if (this.timeout) clearTimeout(this.timeout);
//                 this.timeout = setTimeout(() => this.props.handleSendMessage(id)(ROBOT_NAME, "Hi, I'm robot! it's chat " + id), 2000)
//             }
//         }
//     }

//     render() {
//         const {chats} = this.props;
//         const {id} = this.props.match.params;
//         if (id && chats[id]) {
//             return <Chat {...{messages: chats[id].messages, onSendMessage: this.props.handleSendMessage(id)}} />
//         } else {
//             return <span>Вы не выбрали чат</span>
//         }
//     }
// }