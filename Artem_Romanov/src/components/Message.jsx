import React from 'react';

//Отправка сообщение с одиним и тем же текстом по нажатию кнопки
export default class Message extends React.Component {
render() {
    const {sender,text} = this.props;
    return <div><strong>{sender}: </strong>{text}</div>;
}
}