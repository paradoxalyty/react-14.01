import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {ChatList} from '../components/ChatList/ChatList';
import { addChat } from '../store/chatAction';

const mapStateToProps = (store) => {
    const chats = Object.keys(store.chatReducer.chats).map((id) => ({
            id,
            name: store.chatReducer.chats[id].name,
            unread: store.chatReducer.chats[id].unread
        }));
    return {
        chats
    }
}
const mapDispatchToProps = dispatch => bindActionCreators({addChat}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ChatList)