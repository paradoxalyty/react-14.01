import React from 'react';
import {ButtonSend} from '../ButtonSend/ButtonSend';
import {Input} from '../Input/Input';

export const ChatForm = ({handleKeyUp, handleChange, handleButton, input}) => (
    <>
        <Input handleKeyUp={handleKeyUp}
               handleChange={handleChange}
               input={input}/>

        <ButtonSend handleButton={handleButton}
                    input={input}/>
    </>
);
