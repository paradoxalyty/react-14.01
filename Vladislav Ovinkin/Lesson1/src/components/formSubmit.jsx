const FormSubmit = (messages, sc) => {
    return <button onClick={sendMessage.bind (messages)}>Send</button>;
}

function sendMessage () {
    // console.log (this.messages);
    this.messages.push ({name: "admin", content: "Normal'no"});
}

export { FormSubmit };