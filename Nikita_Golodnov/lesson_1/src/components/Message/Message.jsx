import React from 'react'
import PropTypes from 'prop-types'
import './Message.css'
import classnames from 'classnames'

export const Message = ({text, content}) => {
    const classNames = classnames ('Message', {'Message__bot': text === 'Bot'})
    return (<div className={classNames}><strong>{text}</strong><br/>{content}</div>)
}


Message.propTypes = {
    text: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired 
}
 

