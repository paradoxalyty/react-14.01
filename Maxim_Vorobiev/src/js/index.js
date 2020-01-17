import React from 'react';
import ReactDOM from 'react-dom';

import {H1} from './components/h1';
import {Button} from './components/button';
import {MessageList} from './components/MessageField';

/**
 * Test notes
 */
/*
// Import second script
import {script} from './test-script';

// test-script.js func
script();

// script.js
// Test Babel
export const ES6 = () => {
    console.log('ES6');
};

ES6();

// Native React
const element = React.createElement(
    'h1',
    {className: 'element'},
    'ReactJS Messenger',
);

// JSX
const elementJsx = <h1 className='elementJsx'>ReactJS Messenger</h1>;

// Component H1
const content = "ReactJS Messenger";

const Component = (props) => <h1 className="elementComponent">{props.content}</h1>;
*/


/**
 * ReactJS
 */
const h1Text = 'ReactJS Messenger';
const buttonText = 'Press Me';

// Messenger
const messages = [
    {name: 'Max', content: 'How are you?'},
    {name: 'Dolly', content: 'Fine. And you?'},
    {name: 'Max', content: 'I\'m fine. Bye.'},
    {name: 'Dolly', content: 'See you.'},
];

const Container = function () {
    return (
        <div className="react-wrapper">
            {H1({h1Text})} // for test
            <div id="messages">
                <MessageList messages={messages}/>
            </div>
            <Button buttonText={buttonText}/>
        </div>
    );
};

ReactDOM.render(
    <Container/>,
    document.getElementById('root'),
);

// Button Press Handler
document.getElementById('button').addEventListener('click', function () {
    const newMessage = {name: 'Noname', content: 'It\'s okay'};
    const div = document.createElement("div");
    const strong = document.createElement("strong");
    div.innerText = ' ' + newMessage.content;
    strong.innerText = newMessage.name + ':';
    div.prepend(strong);

    messages.push(newMessage);
    document.getElementById('messages').appendChild(div);

    console.log(messages);
});

