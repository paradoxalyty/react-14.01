import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './Header.css';

export class Header extends Component {
    render() {
        return ( <div className="header">
                <Link to="/" className="header__link"><h1>Chat</h1></Link>
                <Link to="/profile/" className="header__link"><h1>Profile</h1></Link>
            </div>)
    }
}