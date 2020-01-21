import React, {Component} from 'react';
import PropTypes from 'prop-types';

export class H1 extends Component {
    static propTypes = {
        h1Text: PropTypes.string.isRequired,
    };

    static defaultProps = {
        h1Text: "H1 Text",
    };

    state = {
        h1Text: this.props.h1Text,
    };

    componentDidMount() {
        setTimeout(() => this.setState({
            'h1Text':
                this.state.h1Text + ' by Maxim'
        }), 1500);
    }

    render() {
        return (
            <h1>{this.state.h1Text}</h1>
        )
    }
}