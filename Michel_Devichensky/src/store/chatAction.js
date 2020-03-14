/**
 * Оприделение: Компонент Action - (экшен) содержит описание какие нужно внести изменения в Store.
 * Следующий этап перехода до Store перход в dispatch() и перход в Reducer
 */
import { createActions } from 'redux-actions';
/**
 * @function принемает обьект 
 * экспортирует с диструктизацией
 */
export const { loadChats, addMessage } = createActions({
    LOAD_CHATS: () => ({}),// эмитация бэка типа что то с него "LOAD"
    /**
     * Action - экшен передает аргументы функции в обьект.Добавляет новый чат
     * @param id сообщения
     * @param name отправителя сообщения
     * @param content содержание сообщения
     */
    ADD_MESSAGE: (id, name, content) => (
        {
            id,// пример: совпадения параметра со значением id: id . пишется просто id 
            name,
            content
        }
    ),
})