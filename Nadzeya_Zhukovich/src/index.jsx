import React from "react";
import ReactDom from "react-dom";
import {Layout} from "./containers/Layout/Layout";
import './assets/_projects-style.scss';

ReactDom.render(
    <>
        <Layout/>
    </>
    ,
    document.getElementById("root")
);
