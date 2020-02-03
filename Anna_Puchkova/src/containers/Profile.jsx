import React from 'react';
import { Link } from 'react-router-dom';
import {bindActionCreators} from "redux";
import connect from "react-redux/es/connect/connect";

class Profile extends React.Component {
    render() {
        return (
            <div className='layout'>
                <h1>Profile: {this.props.profile.name}</h1>
                <p>Age: {this.props.profile.age}</p>
                <p>E-mail: {this.props.profile.email}</p>
                <Link to='/' className='backLink'> ← Назад</Link>
            </div>
        )
    }
 }

const mapStateToProps = ({profileReducer}) => ({
    profile: profileReducer
});

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Profile);