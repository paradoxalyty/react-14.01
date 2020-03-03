import {bindActionCreators} from 'redux';
import {addChat} from '../store/chatAction';
import {connect} from 'react-redux';
import {ChatList} from '../components/ChatList/ChatList';

const mapStateToProps = ({chatReducer}) => {
    const chats = Object.keys(chatReducer.chats).map((id) => ({
        id,
        name: chatReducer.chats[id].name,
        chatNumber: chatReducer.chats[id].chatNumber,
        unread: chatReducer.chats[id].unread,
    }));
    return {
        chats
    };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({addChat}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(ChatList);