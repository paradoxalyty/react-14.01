import React from 'react';

export default class App extends React.Component {
    state = {
        text: 'My first React-component'
    };

    render() {
        setTimeout(() => this.setState({
            'text': 'refreshed React-component'
        }), 1000);
        return (
            <h1>{this.state.text}</h1>
        )
    }
}