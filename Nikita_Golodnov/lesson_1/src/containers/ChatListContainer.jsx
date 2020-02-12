import {connect} from 'react-redux'
import {ChatList} from '../components/ChatList/ChatList'
import {bindActionCreators} from 'redux'
import {addChat} from '../store/chatAction'

const mapStateToProps = (store) => {
    const chats = Object.keys(store.chatReducer.chats).map((id) => ({
        id,
        name: store.chatReducer.chats[id].name,
        unreadMessages: store.chatReducer.chats[id].unreadMessages
    }))
    return {
        chats
    }
}
   
const mapDispatchToProps = dispatch => bindActionCreators({addChat}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(ChatList)
