import { editProfile } from "../actions/profileActions";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Profile } from "../components/Profile/Profile";

const mapStateToProps = ({ profileReducer }) => {
    return {
        profiles: profileReducer.profiles
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({ editProfile }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Profile);