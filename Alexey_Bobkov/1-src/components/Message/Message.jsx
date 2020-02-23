import React from 'react';
import PropTypes from 'prop-types';
import './Message.sass';
import classnames from 'classnames';
import { CircularProgress } from '@material-ui/core';

export const Message = ({ name, content, isLoading }) => {

    const classNames = classnames('Message', { 'Message Robot': name === 'Robot' });

    if (isLoading == true) {
        return <CircularProgress />
    }

    return (
        (
            <div className={classNames}>
                <strong>{name}: </strong>
                {content}
            </div>)
    );

}

Message.propTypes = {
    name: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,


};