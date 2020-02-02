export const SEND_MESSAGE = '@@message/SEND_MESSAGE';

export const sendMessage = (messageId, name, content, chatId) => ({
    type: SEND_MESSAGE,
    messageId,
    name,
    content,
    chatId,
});