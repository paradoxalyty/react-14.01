import { connect } from 'react-redux';
import { ChatList } from '../components/ChatList/ChatList.jsx';
import { bindActionCreators } from 'redux';
import { addChat } from '../store/chatAction';

const mapStateToProps = (store) => {
    const chatsList = Object.keys(store.chatReducer.chats).map((id) => ({
        id,
        name: store.chatReducer.chats[id].name
    }));
    return {
        chatsList
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({addChat}, dispatch);



export default connect(mapStateToProps, mapDispatchToProps)(ChatList);