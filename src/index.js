import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";

import "sass/import.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import configureStore from "./store";
import App from "./App";

const rootElement = document.getElementById("root");

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
