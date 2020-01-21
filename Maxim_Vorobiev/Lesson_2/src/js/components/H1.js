import React from 'react';

/*
// Function
export default function H1(props) {
    return <h1 className="h1">{props.h1Text}</h1>;
}
*/

// Class
export default class H1Class extends React.Component {
    state = {
        h1Text: this.props.h1Text,
    };

    // componentWillMount() {
    //     console.warn('H1 - componentWillMount');
    // }

    componentDidMount() {
        // console.warn('H1 - componentDidMount');

        setTimeout(() => this.setState({
            'h1Text':
                this.state.h1Text + ' by Maxim'
        }), 1500);
    }

    // componentDidUpdate() {
    //     console.warn('H1 - componentDidUpdate');
    // }

    render() {
        return (
            <h1>{this.state.h1Text}</h1>
        )
    }
}