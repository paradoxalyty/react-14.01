/**
 * Оприделение: Суть Reducer заключается в том что бы взять содержимое Action синхронизовать со Store.
 * Единственный в Redux кто может работать со Store это Reducer.
 */
import { handleActions } from 'redux-actions';
import { loadChats, addMessage } from './chatAction';
/**
 * object defaultState первоначальное значения Store этого редьюсера "chatReducer"
 */
const defaultState = {
    chats: {},
}
/**
 * @function возвращает обьект
 * ключи обьекта экшены
 */
export default handleActions({
    /**
     * переменная [loadChats] - [] способ получения данных из переменной(наша переменная логическая)
     * и запись этих данных в св-в этого обьекта
     */
    [loadChats]: (state) => {
        return {
           ...state,// диструктизирует state
            chats:{
                1: {
                    name: 'Chat_One',
                    messages: [
                        { name: "Ivan", content: "work: chat one" }              
                    ]
                },
                2: {
                    name: 'Chat_Two',
                    messages: [
                        { name: "Ivan", content: "work: chat two" },
                        { name: "Oleg", content: "work: chat two" },
                    ]
                },
                3: {
                    name: 'Chat_Three',
                    messages: [
                        { name: "Ivan", content: "work: chat three" },
                        { name: "Oleg", content: "work: chat three" },
                        { name: "Ivan", content: "work: chat three" }
                    ]
                },
            }
        }
    },
    /**
     * [addMessage] Action при сробатывании этого эктива создается новый Store
     */
    [addMessage]: (state, {payload: {id, name, content}}) => {
        return {
            ...state,//предыдущее состояние
            chats: {//обьект chats
               ...state.chats,//предыдущие чаты
               [id]: {//чат в который попадет новый message
                name: state.chats[id].name,
                    messages: [
                        ...state.chats[id].messages,//обьект с обьектами сообщений messages
                        {name, content}//сам message
                    ]
                },
            }
        }
    }
}, defaultState);// первоначальное значение нашего стейта 