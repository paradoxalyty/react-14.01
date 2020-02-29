import React from 'react';
//import PropTypes from 'prop-types';
import './Header.sass';
import { Link } from 'react-router-dom';
import PushToggle from '../PushToggle/PushToggle';

export const Header = ({ chatName }) =>

    (
        <div className='Header'>
            <PushToggle />
            <h1>{chatName}</h1>
            <h3><Link to='/Profile'>Profile</Link></h3>
        </div>
    );
