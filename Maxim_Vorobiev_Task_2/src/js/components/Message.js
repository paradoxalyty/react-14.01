import React from "react";

export default function Message({name, content}) {
    return <div><strong>{name}:</strong> {content}</div>;
}