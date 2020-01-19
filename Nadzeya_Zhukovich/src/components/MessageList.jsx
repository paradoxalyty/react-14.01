import React from "react";
import {Message} from "./Message";

export const MessageList = ({arrayMessages}) => {
    return arrayMessages.map((arrayMessage, index) =>
        <Message {...arrayMessage} key={index}/>)
};
