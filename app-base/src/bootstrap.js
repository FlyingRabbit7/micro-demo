import React from "react";
import ReactDOM from "react-dom";
import App from "./Appbak";
import "./styles.css";
import "./styles.scss";
import "./styles.less";
import 'antd/dist/antd.css';


var mountNode = document.getElementById("root");
ReactDOM.render(<App name="Jane" />, mountNode);