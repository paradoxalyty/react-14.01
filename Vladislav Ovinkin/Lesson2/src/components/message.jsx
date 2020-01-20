import React, {Component} from "react";

class Message extends Component {
    render () {
        const {name, content} = this.props;
        return <div><strong>{ name }: </strong>{ content }</div>;
    }
}

// const Message = ({name, content}) => <div><strong>{ name }: </strong>{ content }</div>;
// React.createElement ("div", {}, [React.createElement ("strong", {}, name), content]); // after babel conversion

export {Message};