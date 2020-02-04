import { createStore, combineReducers } from 'redux';
import chatReducer from './chatReducer'//редюсер чата
/**
 * @function combineReducers содержит в себе обьект который содержит список редьюсеров
 * редьюсеры хронятся в разных папках
 * chatReducer обьект
 */
const reduser = combineReducers({
    chatReducer,
});
/**
 * 
 * @param {*} preloadedState обьект(пустой) первоначальное состояние нашего приложения
 * return(возвращает) результат функции createStore(reduser, preloadedState)
 * createStore специальная функция redux
 */
export const initStore = ( preloadedStatel={} ) => {
    return createStore(reduser, preloadedStatel)
}