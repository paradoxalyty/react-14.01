import {ChatList} from '../components/ChatList/ChatList';
import {connect} from 'react-redux';

const mapStateToProps = ({ chatReducer }) => {
    return {
        chats: Object.keys(chatReducer.chats).map((id)=>( {id:id, name:chatReducer.chats[id].name}))
    }
}


export default connect(mapStateToProps)(ChatList);