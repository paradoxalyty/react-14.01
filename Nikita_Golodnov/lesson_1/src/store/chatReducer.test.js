import chatReducer from './chatReducer'
import {chatsRequest, addMessage, fire} from './chatAction'

describe('chatReducer', () => {

    it ('chatsRequest', () => {
        const action = chatsRequest ()
        const store = {isLoading: false}

        expect(chatReducer (store, action)).toMatchObject({isLoading: true})
    })

    it ('addMessage', () => {
        const text = 'Ibragim'
        const content = 'Hello!'
        const action = addMessage (1,text, content)
        const store = {chats: {1: {messages: []}}}

        //chatReducer (store, action)
        expect(chatReducer (store, action))
            .toMatchObject({chats: {1: {messages: [{text, content}]}}})
    })

    it ('fire', () => {
        const store = {chats: {1: {unreadMessages: false}}}
        const action = fire(1)
        expect(chatReducer (store, action))
            .toMatchObject({chats: {1: {unreadMessages: true}}})
    })
})