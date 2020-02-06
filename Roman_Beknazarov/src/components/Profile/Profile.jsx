import React, {Component} from 'react';
import Avatar from "@material-ui/core/Avatar";

export class Profile extends Component {
    render () {
        return (
            <div className="profile mainBlock">
                <h4>Profile</h4>
                <Avatar/>
                <p>Roman Beknazarov</p>
                <p>...</p>
                <p>...</p>
                <p>...</p>
            </div>);
    }
}