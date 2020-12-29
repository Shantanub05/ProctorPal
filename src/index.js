import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "tailwindcss/dist/base.css";
import { css } from "styled-components/macro";
import "./styles/bootstrapthemes.scss";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import store from "./store";
import ReactGA from "react-ga";

ReactGA.initialize("G-WKV6QPXSM8");
ReactGA.pageview(window.location.pathname + window.location.search);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
