import React from 'react';
import { Link } from 'react-router-dom';
import {bindActionCreators} from "redux";
import PropTypes from "prop-types";
import connect from "react-redux/es/connect/connect";
import CircularProgress from '@material-ui/core/CircularProgress';
import { loadProfile } from "../actions/profileActions";
import '../styles/styles.css';

class Profile extends React.Component {
  static propTypes = {
    profile: PropTypes.object.isRequired,
    loadProfile: PropTypes.func.isRequired,
    isLoading: PropTypes.bool.isRequired,
    profileId: PropTypes.number.isRequired,
  };

  static defaultProps = {
    profileId: 1,
  };
  componentDidMount() {
    this.props.loadProfile();
  }
    render() {
      if (this.props.isLoading) {
        return <CircularProgress />
      }
        return (
            <div className='layout'>
                <h1>Profile: {this.props.profile.name}</h1>
                <p>Name: {this.props.profile.name}</p>
                <p>Age: {this.props.profile.age}</p>
                <p>E-mail: {this.props.profile.email}</p>
                <Link to='/' className='backLink'> ← Back</Link>
            </div>
        )
    }
 }

const mapStateToProps = ({profileReducer}) => ({
  profile: profileReducer.profile,
  isLoading: profileReducer.isLoading,
});

const mapDispatchToProps = dispatch => bindActionCreators({ loadProfile }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Profile);