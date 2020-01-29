import React, {Component} from 'react';
import './Header.css';

export class Header extends Component {
    state = {
        headerText: 'ReactJS',
    };

    componentDidMount() {
        setTimeout(() => this.setState({
            'headerText':
                this.state.headerText + ' Messenger'
        }), 1400);
    }

    render() {
        return <h1 className="react-messenger__header" style={{textAlign: 'center'}}>{this.state.headerText}</h1>;
    }
}