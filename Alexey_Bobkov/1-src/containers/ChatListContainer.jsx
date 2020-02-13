import { connect } from 'react-redux';
import { ChatList } from '../components/ChatList/ChatList.jsx';
import { bindActionCreators } from 'redux';

const mapStateToProps = (store) => {
    const chatsList = Object.keys(store.chatReducer.chats).map((id) => ({
        id,
        name: store.chatReducer.chats[id].name
    }));
    return {
        chatsList
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);



export default connect(mapStateToProps, mapDispatchToProps)(ChatList);