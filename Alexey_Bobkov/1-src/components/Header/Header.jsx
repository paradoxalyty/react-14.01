import React from 'react';
//import PropTypes from 'prop-types';
import './Header.sass';
import { Link } from 'react-router-dom';

export const Header = ({ chatName }) =>

    (
        <div className='Header'>
            <h1>{chatName}</h1>
            <h3><Link to='/Profile'>Profile</Link></h3>
        </div>
    );
