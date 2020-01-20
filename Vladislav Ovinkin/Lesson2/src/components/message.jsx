import React from "react";

const Message = ({name, content}) => <div><strong>{ name }: </strong>{ content }</div>;
// React.createElement ("div", {}, [React.createElement ("strong", {}, name), content]); // after babel conversion

export default Message;