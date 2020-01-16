import { Message } from './message.jsx';
import { FormSubmit } from './formSubmit.jsx';

const MessageList = ({messages}) => {
    // return messages.map ((message, index) => <Message name = { message.name } content = { message.content } key = { index } />);
    return <div>
            <FormSubmit messages = { messages } />
            { messages.map ((message, index) => <Message {...message} key = { index } />)}
          </div>;
}

export { MessageList };