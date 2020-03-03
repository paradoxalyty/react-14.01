import React from 'react';
import {Link} from 'react-router-dom';
import MeetingRoomIcon from '@material-ui/icons/MeetingRoom';

import './Header.css';

export const Header = () => {
    return <header className="header">
        <Link to="/home" className="logo"><MeetingRoomIcon/>Home</Link>
    </header>
};