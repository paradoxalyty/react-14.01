export const ADD_CHAT = '@@chat/ADD_CHAT';
export const DELETE_CHAT = '@@chat/DELETE_CHAT';
export const HIGHLIGHT_CHAT = '@@chat/HIGHLIGHT_CHAT';
export const UNHIGHLIGHT_CHAT = '@@chat/UNHIGHLIGHT_CHAT';

export const addChat = (title) => ({
   type: ADD_CHAT,
   title,
});

export const deleteChat = chatId => ({
   type: DELETE_CHAT,
   chatId,
 });

export const highlightChat = (chatId) => ({
   type: HIGHLIGHT_CHAT,
   chatId,
});

export const unhighlightChat = (chatId) => ({
   type: UNHIGHLIGHT_CHAT,
   chatId,
});