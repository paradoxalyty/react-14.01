import React from "react";
import ReactDom from "react-dom";
//import App from './components/app.jsx';
import MessageField from './components/MessageField.jsx'





ReactDom.render( <MessageField />,document.getElementById('root'),
);






/*
const messages = [
    { name: 'Andrey', content: 'Hi' },
    { name: 'Q', content: 'Hello' },
    { name: 'W', content: 'Dfd' },
    { name: 'E', content: 'Wqw' }

]

const Message = ({ name, content }) => <div> <strong> {name}: </strong> { content}</div > ;
const MessageList = ({ messames }) => {
        return messages.map((message, index) => < Message {...message }
            key = { index }
            />)
        }

        ReactDom.render( < MessageList > </MessageList>, document.getElementById('root'));



                /*

                ReactDom.render(<Link title="test link" link="google.com"></Link>,root);
                ReactDom.render(<button onclick='' >Кнопка</button>,root);
                function Link(props) {
                    return <a href = { "https://" + props.link } > { props.title } </a>
                }


                function test(){
                    return(
                        <button onclick=''>Норм кнопка/>
                        const Message=({name, content}) => <div><strong>{name}:</strong> {content}</div>;
                        const MessageList = ({messames}) => {
                        return messages.map((message, index)=> <Message {...message} key={index}/>)
                }
                        <MessageList></MessageList>
                    )
                }




                */