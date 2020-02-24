import React, { Component } from 'react';

export class Profile extends Component {
    constructor(props){
        super(props);
    }
    render() {
        const { name } = this.props;
        const { id } = this.props.match.params;
        console.log(id);
        return (<>
            <h1>chat id is {id}</h1>
            <h2>Name is </h2>
        </>)
    }
}