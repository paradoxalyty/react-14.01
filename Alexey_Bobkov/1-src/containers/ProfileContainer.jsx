import { connect } from 'react-redux';
import { Profile } from '../components/Profile/Profile.jsx';

const mapStateToProps = ({ profileReducer }) => {

    return {
        profile: profileReducer.profile
    }
}

export default connect(mapStateToProps)(Profile);