import { connect } from 'react-redux';
import { ChatList } from '../components/ChatList/ChatList.jsx'

const mapStateToProps = ({ chatReducer }) => {

    return {

        chats: chatReducer.chats
    }
}

export default connect(mapStateToProps)(ChatList);