import React from "react";
import ReactDom from "react-dom";



const Link = ({title, link}) => <a href={"https://" + link}>{title}</a>; // JSX

ReactDom.render(<Link title="This is a link" link="google.ru" />, document.getElementById("root"));

/*
// without JSX
return React.createElement("a", {"href": "https://" + props.link}, props.title);
ReactDom.render(React.createElement(Link, {title: "This is a link", link: "google.ru"}), document.getElementById("root"));
*/
