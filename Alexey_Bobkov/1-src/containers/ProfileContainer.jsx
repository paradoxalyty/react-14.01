import { connect } from 'react-redux';
//import { ChatList } from '../components/ChatList/ChatList.jsx'
import { Profile } from '../components/Profile/Profile.jsx';

const mapStateToProps = ({ chatReducer, profileReducer }) => {

    return {
        chats: chatReducer.chats,
        profile: profileReducer.profile
    }
}

export default connect(mapStateToProps)(Profile);