import React from "react";

export function Message({name, content}) {
    return <div><strong>{name}:</strong> {content}</div>;
}