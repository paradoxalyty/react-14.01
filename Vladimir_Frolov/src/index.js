import React from "react";
import ReactDom from "react-dom";

const messages = [
    {name: "Ivan", content: "Hello!"},
    {name: "Oleg", content: "Hi, how are you?"},
    {name: "Ivan", content: "I am well"}
];

const Message = ({name, content}) => <div><strong>{name}:</strong> {content}</div>;

// React.createElement("div", {}, [React.createElement("strong", {}, name), content])

class MessageList extends React.Component {
    constructor(props) {
        super(props);
        this.messAdd = this.messAdd.bind(this);
        this.state = {
            mess: this.props.messages
        }
    }

    componentDidUpdate() {
        if (this.state.mess[this.state.mess.length - 1]['name'] !== 'ROBOT') {
            let mess = this.state.mess.slice();
            mess.push({name: "ROBOT", content: "Я робот"});
            this.setState({
                mess: mess
            })
        }
    }

    messAdd() {
        let mess = this.state.mess.slice();
        mess.push({name: "Ivan", content: "Нормально"});

        this.setState({
            mess: mess
        })
    }

    render() {
        let mess = this.state.mess.map((message, index) => <Message {...message} key={index}/>)
        return <>{mess}
            <br/>
            <button onClick={this.messAdd}>Добавить сообщение</button>
        </>
    }
}


ReactDom.render(<>
    <MessageList messages={messages}/>
</>, document.getElementById("root"));

// <Link title="Это ссылка" link="google.ru"/>
// const Link = ({title, link}) => <a href={"https://" + link}>{title}</a>; // JSX
// return React.createElement("a", {"href": "https://" + props.link}, props.title); // No JSX
// React.createElement(Link, {title: "Это ссылка", link: "google.ru"})