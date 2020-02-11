import React, { Component } from "react";
import PropTypes from "prop-types";
import '../styles/styles.css';
import { Link } from 'react-router-dom';
import Avatar from 'material-ui/svg-icons/action/account-circle';
import {bindActionCreators} from "redux";
import connect from "react-redux/es/connect/connect";
import { loadChats } from "../actions/chatActions";
import { loadProfile } from "../actions/profileActions";
import CircularProgress from '@material-ui/core/CircularProgress';

class Header extends Component {
    static propTypes = {
        chatId: PropTypes.number,
        chats: PropTypes.object.isRequired,
        isLoading: PropTypes.bool.isRequired,

    };
 
    static defaultProps = {
        chatId: 1,

    };

    render () {
        if (this.props.isLoading) {
            return <CircularProgress />
        }
        const { chats, chatId } = this.props;
        //console.log('asd', this.props.profile.name);
        return <div className='header'>
                    <span>Chat: {chats[chatId].title}</span>
                    <Link to='/profile/' className='profileLink'>
                    <Avatar color='#3cc2d1' className='profileAvatar' />
                    <span>Go to Profile</span>
                    </Link>
            </div>
    }
}

const mapStateToProps = ({ chatReducer }) => ({
    chats: chatReducer.chats,
    isLoading: chatReducer.isLoading,

  });

const mapDispatchToProps = dispatch => bindActionCreators({loadChats}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Header);