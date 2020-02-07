import {addMessage} from './chatAction'

// export default function botMiddleware (store) {
//     return function (next) {
//         return function (action) {
//             console.log (action.type)
//             next (action)
//         }
//     }
// }

export default store => next => action => {
    if (action.type === addMessage.toString () && action.payload.text !== 'Bot') {
        const {id, text} = action.payload
        setTimeout (() => store.dispatch (addMessage (id, 'Bot', `И, ${text}, redux ты тоже никогда не выучишь, кусок мяса!1`)), 1500)
    }
    next (action)
}