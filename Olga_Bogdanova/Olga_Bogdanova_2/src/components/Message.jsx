import React from "react";
import PropTypes from 'prop-types'

export default class Message extends React.Component {
  static propTypes = {
      text: PropTypes.string
  }

  render () {
      return <div>
          <b>{this.props.name}</b>
          {this.props.content}
      </div>
  }
}