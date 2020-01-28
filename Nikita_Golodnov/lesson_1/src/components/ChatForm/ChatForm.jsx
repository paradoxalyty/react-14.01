import React, {useState, useRef, useEffect} from "react"
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField';

/**
 * Компонент по отрисовке поля с формой отправки нового сообщения 
 * @param {string} content Текст сообщения 
 * @param {string} text Имя отправителя
 * @param {Function} sendMessage Обработчик отправки нового сообщения
 */

// export class ChatForm extends Component {
//     state = {
//         text: 'User',
//         message: ''
//     }
//     textarea = React.createRef ()
//     componentDidMount () {
//         this.textarea.current.focus()
//     }
//     render () {
//         return (<div>
//         <input value={this.state.text} type="text" />
//         <textarea value={this.state.message} ref={this.textarea} />
//         <button>Отправить</button>
//     </div>)
//     }
// }

export const ChatForm = ({ sendMessage }) => { 
    const [text, setText] = useState ('')
    const [content, setContent] = useState ('')
    //const textarea = useRef ()

    // useEffect (() => {
    //     textarea.current.focus ()
    // }, [])

    const handleClick = () => {
        sendMessage ({ text, content })
    }

    const handleKeyUp = (event) => {
        if (event.keyCode === 13) {
            handleClick ()
        }
    }

    return (<div>
        <TextField 
            variant="filled" 
            value={text} 
            placeholder="User"
            onChange={({currentTarget: {value}}) => setText(value)} 
            type="text" />
        <TextField 
            variant="filled" 
            multiline 
            autoFocus 
            value={content} 
            placeholder="Message"
            onChange={({currentTarget: {value}}) => setContent(value)}
            onKeyUp={handleKeyUp} />
        <Button onClick={handleClick} variant="contained">Отправить</Button>
    </div>)
}

ChatForm.propTypes = {
    sendMessage: PropTypes.func.isRequired
}