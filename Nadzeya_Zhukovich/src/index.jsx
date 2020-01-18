import React from "react";
import ReactDom from "react-dom";

const Link = (props) =>  <a href={"http://" + props.link}>{props.title}</a>
ReactDom.render(<Link title="This is a link" link="google.ru"></Link>, document.getElementById("root"));

// return React.createElement("a", {"href": "https://" + props.href}, props.title);
// React.createElement(Link, {title: "This is a link", link: "google.ru"}
