import React, {Component} from 'react';
import {Button} from '../Button/Button';
import {Input} from '../Input/Input';

export const ChatForm = ({handleKeyUp, handleChange, handleButton, input}) => (
    <>
        <Input handleKeyUp={handleKeyUp}
               handleChange={handleChange}
               input={input}/>

        <Button handleButton={handleButton}
                input={input}/>
    </>
);
