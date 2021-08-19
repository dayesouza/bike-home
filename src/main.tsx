import React from "react";
import ReactDOM from "react-dom";
import { App } from "./components/App/App";
import "./components/icon-library";
import "./assets/custom.scss";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
