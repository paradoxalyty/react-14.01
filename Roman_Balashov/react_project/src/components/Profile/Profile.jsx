import React, {Component} from 'react';

export class Profile extends Component {
    render () {
        console.log(this.props);
    return (<h1>{this.props.name}</h1>)
    }
}