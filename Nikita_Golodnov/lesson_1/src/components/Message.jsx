import React, {Component} from "react"
import PropTypes from 'prop-types'

//const Message = ({name, content}) => <div><strong>{name}:</strong> {content}</div>

export class Message extends Component {
    static propTypes = {
        text: PropTypes.string.isRequired 
    }
 
    render () {
        return <div>
            <b>{this.props.text}: </b>
            {this.props.content}
        </div>
    }
}

