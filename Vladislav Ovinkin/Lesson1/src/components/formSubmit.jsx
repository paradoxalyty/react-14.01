import ReactDom from "react-dom";
import { MessageList } from './messageList.jsx';

let authorName = 'admin';

const FormSubmit = (messages) => {
    return <button onClick={sendMessage.bind (messages)}>Send</button>;
}

function sendMessage () {
    this.messages.push ({name: authorName, content: "Normal'no"});    
    console.log (this.messages);
    ReactDom.render (<MessageList messages={ this.messages } />, document.getElementById ('root'));
}

export { FormSubmit };