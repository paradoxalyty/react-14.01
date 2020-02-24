import { connect } from 'react-redux';
import { ChatList } from '../components/ChatList/ChatList.jsx';
import { bindActionCreators } from 'redux';
import { addChat, deleteChat } from '../store/chatAction';
import { push } from 'connected-react-router';

const mapStateToProps = (store) => {
    const chatsList = Object.keys(store.chatReducer.chats).map((id) => ({
        id,
        name: store.chatReducer.chats[id].name,
        unread: store.chatReducer.chats[id].unread,
    }));
    return {
        chatsList
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({ addChat, deleteChat, push }, dispatch);



export default connect(mapStateToProps, mapDispatchToProps)(ChatList);