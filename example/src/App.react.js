// @flow

import * as React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import ForgotPasswordPage from "./ForgotPasswordPage.react";
import LoginPage from "./LoginPage.react";
import RegisterPage from "./RegisterPage.react";

import "bootstrap";

import "./App.css";

type Props = {||};

function App(props: Props): React.Node {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <React.Fragment>
        <Route exact path="/forgot-password" component={ForgotPasswordPage} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/register" component={RegisterPage} />
      </React.Fragment>
    </Router>
  );
}

export default App;
