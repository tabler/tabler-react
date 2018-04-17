// @flow

import * as React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import ForgotPasswordPage from "./pages/ForgotPasswordPage.react";
import LoginPage from "./pages/LoginPage.react";
import RegisterPage from "./pages/RegisterPage.react";
import FormElements from "./pages/FormElements.react";
import error400 from "./pages/400.react";
import error401 from "./pages/401.react";
import error403 from "./pages/403.react";
import error404 from "./pages/404.react";

import "./App.css";

type Props = {||};

function App(props: Props): React.Node {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <React.Fragment>
        <Route exact path="/forgot-password" component={ForgotPasswordPage} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/register" component={RegisterPage} />
        <Route exact path="/forms-elements" component={FormElements} />
        <Route exact path="/400" component={error400} />
        <Route exact path="/401" component={error401} />
        <Route exact path="/403" component={error403} />
        <Route exact path="/404" component={error404} />
        <Route path="*" exact={true} component={error404} />
      </React.Fragment>
    </Router>
  );
}

export default App;
