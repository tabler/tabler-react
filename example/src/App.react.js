// @flow

import * as React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Pages from "./pages";

import "./App.css";

const {
  ForgotPasswordPage,
  LoginPage,
  RegisterPage,
  Error400,
  Error401,
  Error403,
  Error404,
  Error500,
  Error503,
} = Pages;

type Props = {||};

function App(props: Props): React.Node {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <React.Fragment>
        <Route exact path="/forgot-password" component={ForgotPasswordPage} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/register" component={RegisterPage} />
        <Route exact path="/400" component={Error400} />
        <Route exact path="/401" component={Error401} />
        <Route exact path="/403" component={Error403} />
        <Route exact path="/404" component={Error404} />
        <Route exact path="/500" component={Error500} />
        <Route exact path="/503" component={Error503} />
        <Route path="*" exact={true} component={Error404} />
      </React.Fragment>
    </Router>
  );
}

export default App;
