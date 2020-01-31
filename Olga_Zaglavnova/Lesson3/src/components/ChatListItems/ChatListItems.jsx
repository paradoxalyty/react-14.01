import React from "react";
import PropTypes from "prop-types";
import {ChatListItem} from "../ChatListItem/ChatListItem";

/**
 * Компонент отрисовки всех пользователей
 * @param {array} users Массив пользователей, каждое сообщение - объект {имя пользователя, ссылка на аватар}
 */
export const ChatListItems =({chats}) => {
    //return chats.map((chat, id) => <ChatListItem {...{chat}} key={id} />)
    return Object.keys(chats).map((chatName, id) => <ChatListItem {...{chat: chats[chatName]}} key={id} />)
};

ChatListItems.propTypes={
    users: PropTypes.arrayOf(PropTypes.shape(ChatListItem.propTypes)),
}