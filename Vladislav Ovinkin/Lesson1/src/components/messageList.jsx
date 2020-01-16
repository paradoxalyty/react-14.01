import { Message } from './message.jsx';

const MessageList = ({messages}) => {
    // return messages.map ((message, index) => <Message name = { message.name } content = { message.content } key = { index } />);
    return messages.map ((message, index) => <Message {...message} key = { index } />);
}

export { MessageList };