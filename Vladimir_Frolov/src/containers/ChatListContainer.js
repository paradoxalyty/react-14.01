import { ChatList } from '../components/ChatList/ChatList';
import { connect } from 'react-redux';

const mapStateToProps = ({ chatReducer }) => {
    return {
        chatsLoading: chatReducer.chatsLoading,
        chatsLoadError: chatReducer.chatsLoadError,
        chats: Object.keys(chatReducer.chats).map((id) => ({ id: id, name: chatReducer.chats[id].name, is_active: chatReducer.chats[id].is_active }))
    }
}


export default connect(mapStateToProps)(ChatList);