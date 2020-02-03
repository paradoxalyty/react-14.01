import React from 'react';
import PropTypes from 'prop-types';

export default class Message extends React.Component {
  static propTypes = {
    content: PropTypes.string.isRequired,
  };

  render() {
    const Message = ({ name, content }) =>
      <div>
        <strong>{this.props.name}:</strong> {this.props.content}
      </div>;
    return <Message />
  }
}