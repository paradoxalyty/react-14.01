import chatReducer from "./chatReducer";
import { addMessage, fire, chatRequest } from "../actions/chatActions";

describe("chatReducer", () => {
    it("chatsRequest", () => {
        const store = { isLoading: false }
        const action = chatRequest();

        expect(chatReducer(store, action)).toMatchObject({ isLoading: true });
    });

    it("addMessage", () => {
        const name = "Dog";
        const text = "bork";
        const store = { chats: { 1: { messages: [] } } }
        const action = addMessage(1, name, text);

        expect(chatReducer(store, action)).toMatchObject({ chats: { 1: { messages: [{ name, text }] } } })
    });
    it("fire", () => {
        const store = { chats: { 1: { unread: false } } };
        const action = fire(1);

        expect(chatReducer(store, action)).toMatchObject({ chats: { 1: { unread: true } } });
    })
})