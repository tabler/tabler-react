// @flow

import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import "./c3jscustom.css";

import App from "./App.react";

const rootElement = document.getElementById("root");

if (rootElement) {
  ReactDOM.render(<App />, rootElement);
} else {
  throw new Error("Could not find root element to mount to!");
}
