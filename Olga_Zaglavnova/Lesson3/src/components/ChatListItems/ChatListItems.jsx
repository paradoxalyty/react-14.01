import React from "react";
import PropTypes from "prop-types";
import {ChatListItem} from "../ChatListItem/ChatListItem";

/**
 * Компонент отрисовки всех пользователей
 * @param {array} users Массив пользователей, каждое сообщение - объект {имя пользователя, ссылка на аватар}
 */
export const ChatListItems =({users}) => {
    return users.map((user, index) => <ChatListItem {...{user}} key={index} />)
};

ChatListItems.propTypes={
    users: PropTypes.arrayOf(PropTypes.shape(ChatListItem.propTypes)),
}