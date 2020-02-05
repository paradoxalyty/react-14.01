import React from "react";
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './Message.css';

export const Message = ({name, content, time}) => {
    const classNames = classnames ('message', {'message--robot': name === 'chatBot'});
    return (<div className={classNames}>
        <strong><span className="messageUserName">{ name }</span>{ time == undefined ?  "" : <small> [{time}]</small>}:</strong><br/>&mdash; { content }
    </div>);
}

Message.propTypes = {
    name: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    time: PropTypes.string,
}