import { connect } from 'react-redux';
import { ChatList } from '../components/ChatList/ChatList.jsx';
import { bindActionCreators } from 'redux';
import { addChat } from '../store/chatAction';
import { push } from 'connected-react-router';

const mapStateToProps = (store) => {
    const chatsList = Object.keys(store.chatReducer.chats).map((id) => ({
        id,
        name: store.chatReducer.chats[id].name
    }));
    return {
        chatsList
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({addChat, push}, dispatch);



export default connect(mapStateToProps, mapDispatchToProps)(ChatList);