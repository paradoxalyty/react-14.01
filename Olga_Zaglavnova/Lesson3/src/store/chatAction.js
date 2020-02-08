import {createActions} from 'redux-actions';

export const {loadChats, addMessage, addChat, switchToAdd, changeClass, switchPage, setIsActive, deleteChat, deleteMessage} = createActions({
    LOAD_CHATS: () => ({}),
    ADD_MESSAGE: (id, msgClass, name, message, time) => ({id, msgClass, name, message, time}),
    ADD_CHAT: (name, messages, userAvatar) => ({name, messages, userAvatar}),
    SWITCH_TO_ADD: () => ({}),
    CHANGE_CLASS: (id, newClassName) =>({id, newClassName}),
    SWITCH_PAGE: (id, linkStr) => ({id, linkStr}),
    SET_IS_ACTIVE: (id, isActiveClass) => ({id, isActiveClass}),
    DELETE_CHAT: (id) => ({id}),
    DELETE_MESSAGE: (id, msgIdx) => ({id, msgIdx})
});