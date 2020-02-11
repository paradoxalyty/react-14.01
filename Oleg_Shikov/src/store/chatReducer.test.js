import chatReducer from './chatReducer';
import {chatsRequest, addMessage, fire} from './chatAction';

describe('chatReducer', () => {

    it('chatsRequest', () => {
        const store = { isLoading: false }
        const action = chatsRequest();
        
        expect(chatReducer(store, action))
            .toMatchObject({ isLoading: true });
    });

    it('addMessage', () => {
        const name = "Ivan";
        const content = "Hello!";
        const store = { chats: {1: {messages: []}}}
        const action = addMessage(1, name, content);
        
        expect(chatReducer(store, action))
            .toMatchObject({ chats: {1: {messages: [{name, content}]}}});
    });

    it('fire', () => {
        const store = { chats: {1: {unread: false}}}
        const action = fire(1);

        expect(chatReducer(store, action))
            .toMatchObject({ chats: {1: {unread: true}}});
    });

});