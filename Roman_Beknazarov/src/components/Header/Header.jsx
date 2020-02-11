import React from 'react';
import './Header.css';
import {Link} from 'react-router-dom';
import MeetingRoomIcon from '@material-ui/icons/MeetingRoom';

export const Header = () => {
    return <header className="header">
        <Link className="logo" to="/home"><MeetingRoomIcon/></Link>

    </header>
};