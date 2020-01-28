import React, {Component} from 'react';

export class Header extends Component {
    state = {
        headerText: 'ReactJS Messenger',
    };

    componentDidMount() {
        setTimeout(() => this.setState({
            'headerText':
                this.state.headerText + ' by Maxim'
        }), 1400);
    }

    render() {
        return <h1 className="react-messenger__header" style={{textAlign: 'center'}}>{this.state.headerText}</h1>;
    }
}