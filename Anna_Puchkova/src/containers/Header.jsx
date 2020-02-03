import React, { Component } from "react";
import PropTypes from "prop-types";
import '../styles/styles.css';
import { Link } from 'react-router-dom';
import Avatar from 'material-ui/svg-icons/action/account-circle';

export default class Header extends Component {
    static propTypes = {
        chatId: PropTypes.number,
    };
 
    static defaultProps = {
        chatId: 1,
    };

    render () {
        return <div className='header'>
                    <span>Chat { this.props.chatId }</span>
                    <Link to='/profile/' className='profileLink'>
                    <Avatar color='#3cc2d1' className='profileAvatar' />
                    <span>Profile</span>
                    </Link>
            </div>
    }
}