import React, { Component } from "react";
import PropTypes from "prop-types";
import '../styles/styles.css';
import { Link } from 'react-router-dom';
import Avatar from 'material-ui/svg-icons/action/account-circle';
import {bindActionCreators} from "redux";
import connect from "react-redux/es/connect/connect";

class Header extends Component {
    static propTypes = {
        chats: PropTypes.object.isRequired,
        chatId: PropTypes.number,
    };
 
    static defaultProps = {
        chatId: 1,
    };

    render () {
        console.log('asd', this.props.chatsName)
        return <div className='header'>
                    <span>Chat { this.props.chatId }</span>
                    <Link to='/profile/' className='profileLink'>
                    <Avatar color='#3cc2d1' className='profileAvatar' />
                    <span>Profile: { this.props.profile.name }</span>
                    </Link>
            </div>
    }
}

const mapStateToProps = ({profileReducer}) => ({
    profile: profileReducer
});

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Header);