import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./sass/index.css";
// import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Switch, Route } from "react-router-dom";
import Loginpage from "./components/Loginpage";
import Selectmail from "./components/Selectmail";
import Signup from "./components/Signup";
import history from "./history";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter history={history}>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
