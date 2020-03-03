import React, {Component} from 'react';
import Avatar from "@material-ui/core/Avatar";
import {Clock} from '../Clock/Clock';

export class Profile extends Component {
    render () {
        return (
            <div className="profile mainBlock">
                <div>
                    <h3>Profile</h3>
                    <Avatar/>
                    <p>Roman Beknazarov</p>
                    <p>...</p>
                    <p>...</p>
                    <p>...</p>
                </div>
                <Clock/>
            </div>);
    }
}