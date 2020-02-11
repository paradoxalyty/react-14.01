import {chatsRequest, chatsSuccess, chatsFailure} from './chatAction';

export const loadChats = () => {
        return async (dispatch) => {
           try {
                dispatch(chatsRequest())
                const result = await fetch('/api/chats.json');
                dispatch(chatsSuccess(await result.json()))
           }catch(e){
                dispatch(chatsFailure(e))
           }
        }
    }