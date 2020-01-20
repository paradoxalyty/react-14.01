import React from "react";
import ReactDom from "react-dom";
import { MessageList } from './components/MessageList';
// import { Counter } from './components/Counter'
// import {App} from './components/App'

// const messages = [
//     {name: "Kolya", content: "Hello!"},
//     {name: "Olya", content: "Hi! How are you?"},
//     {name: "Kolya", content: "I am well"},
// ];

ReactDom.render (<MessageList />, document.getElementById ('root'));
// ReactDom.render (<App />, document.getElementById ('root'));

// ----- Первый вариант
// const root = document.getElementById ('root');
// ReactDom.render (React.createElement ('a', {'href': 'mail.ru'}, 'Hello!'), root);

// ----- Второй вариант
// function Link () {
//     return React.createElement ('a', {'href': 'mail.ru', 'title': 'Это ссылка'}, 'Hello v.2!');
// }
// ReactDom.render (React.createElement (Link), document.getElementById ('root'));

// ----- Третий вариант (передача аргумента)
// function Link (props) {
//     return React.createElement ('a', {'href': 'https://' + props.href, 'title': 'Это всплывающее сообщение'}, props.text);
// }
// ReactDom.render (React.createElement (Link, {text: 'Это ссылка', href: 'geekbrains.ru'}), document.getElementById ('root'));

// ----- Четвёртый вариант (JSX/Babel)
// function Link (props) {
//     return <a href={'https://' + props.link} title={props.title}>{props.text}</a>
// }
// ReactDom.render (React.createElement (Link, {text: 'Это ссылка (JSX)', title: 'Это всплывающее сообщение', link: 'geekbrains.ru'}), document.getElementById ('root'));

// ----- Пятый вариант (JSX short)
// function Link (props) {
//     return <a href={'https://' + props.link} title={props.title}>{props.text}</a>
// }
// ReactDom.render (<Link text='Это ссылка (JSX - краткий вариант)' title='Это всплывающее сообщение' link='geekbrains.ru' />, document.getElementById ('root'));

// ----- Шестой вариант (JSX next level)
// const Link = (props) => <a href={'https://' + props.link} title={props.title}>{props.text}</a>;
// ReactDom.render (<Link text='Это ссылка (JSX - более коротко)' title='Это всплывающее сообщение' link='geekbrains.ru' />, document.getElementById ('root'));

// ----- Седьмой вариант (JSX деструктуризация)
// const Link = ({link, text, title}) => <a href={'https://' + link} title={title}>{text}</a>;
// ReactDom.render (<Link text='Это ссылка (JSX деструктуризация)' title='Это всплывающее сообщение' link='geekbrains.ru' />, document.getElementById ('root'));
