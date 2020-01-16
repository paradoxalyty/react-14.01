// Import second script
// import {script} from './second-index';

// second-script.js
// script();

// script.js
// Test Babel
// export const ES6 = () => {
//     console.log('ES6');
// };
//
// ES6();


// React
import React from 'react';
import ReactDom from 'react-dom';

// Native React
/* const element = React.createElement(
    'h1',
    {className: 'element'},
    'ReactJS by GeekBrain',
); */

// JSX
// const elementJsx = <h1 className='elementJsx'>ReactJS by GeekBrain</h1>;

// Component
const content = "ReactJS by GeekBrain";
//
const Component = (props) => <h1 className="elementComponent"> {props.content}</h1>;
//
ReactDom.render(
    // element, // Native React
    // elementJsx, // JSX
    <Component content={content}/>, // Component
    document.getElementById('h1'),
);

const messages = [
    {name: 'Max', content: 'How are you?'},
    {name: 'Dolly', content: 'Fine. And you?'},
    {name: 'Max', content: 'I\'m fine. Bye.'},
    {name: 'Dolly', content: 'See you.'},
];

const Message = ({name, content}) => <div><strong>{name}:</strong> {content}</div>;

const MessageList = ({messages}) => messages.map((message, index) => <Message name={message.name} content={message.content} key={index}/>);

ReactDom.render(
    <MessageList messages={messages}/>,
    document.getElementById('root'),
);
