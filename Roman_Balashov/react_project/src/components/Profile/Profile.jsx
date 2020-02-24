import React, { Component } from 'react';
import "./Profile.css";

export class Profile extends Component {
    render() {
        const { id, name, description } = this.props.profiles;
        return (<div className="profile">
            <h1>Hello, {name}.</h1>
            <h2>Your id is: {id}</h2>
            <p>Description: {description}</p>
        </div>)
    }
}