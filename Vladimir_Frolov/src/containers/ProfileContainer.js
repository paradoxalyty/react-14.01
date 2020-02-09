import {ProfileData} from '../components/ProfileData/profileData';
import {connect} from 'react-redux';

const mapStateToProps = ({profileReduser}) => {
    return profileReduser
}


export default connect(mapStateToProps)(ProfileData);