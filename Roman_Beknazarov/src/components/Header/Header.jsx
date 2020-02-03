import React from 'react';
import './Header.css';
import {Link} from "react-router-dom";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

export const Header = () => {

    return <header className="header">
        <a className="logo" href="#">Logo</a>
        <List>
            <ListItem><Link to="/profile">Profile</Link></ListItem>
            <ListItem><Link to="/home">Home</Link></ListItem>
        </List>
    </header>
};