import React from 'react';

export default class App extends React.Component {
    state = {
        text: 'My first React-component'
    };

    componentWillMount() {
        console.log("componentWillMount");
    }

    componentDidMount() {
        console.log("componentDidMount");
        setTimeout(() => this.setState({
            'text': 'refreshed React-component'
        }), 1000);
    }

    componentDidUpdate() {
        console.log("componentDidUpdate");
    }

    render() {
        console.log("render");
        return (
            <h1>{this.state.text}</h1>
        )
    }
}