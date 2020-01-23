import React from 'react';
import PropTypes from 'prop-types';

export default class Message extends React.Component {
  static propTypes = {
    name: PropTypes.string,
    content: PropTypes.string.isRequired,
  };
  static defaultProps = {
    name: 'Пользователь'
  };

  render() {
    const Message = ({ name, content }) =>
      <div>
        <strong>{this.props.name}:</strong> {this.props.content}
      </div>;
    return <Message />
  }
}