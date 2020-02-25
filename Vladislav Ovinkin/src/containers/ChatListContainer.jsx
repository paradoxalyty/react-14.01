import { connect } from 'react-redux';
import {ChatList} from '../components/ChatList/ChatList';

const mapStateToProps = (store) => {
    const {chats} = store.chatReducer;
    const listChat = Object.keys (chats).map((id) => (
        {
            id, 
            name: chats[id].name,
        }));
    return {
        listChat
    }
}

export default connect (mapStateToProps) (ChatList);