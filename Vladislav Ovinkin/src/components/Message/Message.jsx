import React from "react";
import PropTypes from 'prop-types';

export const Message = ({name, content, time}) =>
        (<div><strong>{ name }{ time == undefined ?  "" : <small> [{time}]</small>}:</strong><br/>&mdash; { content }<hr/></div>);

Message.propTypes = {
    name: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    time: PropTypes.string,
}