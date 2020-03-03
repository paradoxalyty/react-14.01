import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ChatList } from '../components/ChatList/ChatList';
import { addChat } from '../store/chatAction';

const mapStateToProps = (store) => {
    const {chats} = store.chatReducer;
    const listChat = Object.keys (chats).map((id) => (
        {
            id, 
            name: chats[id].name,
            unread: chats[id].unread,
        }));
    return {
        listChat
    }
}
const mapDispatchToProps = dispatch => bindActionCreators ({addChat}, dispatch);

export default connect (mapStateToProps, mapDispatchToProps) (ChatList);