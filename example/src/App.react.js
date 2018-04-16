// @flow

import * as React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./App.css";
import ForgotPasswordPage from "./ForgotPasswordPage.react";

type Props = {||};

function App(props: Props): React.Node {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="page">
        <Route exact path="/forgot-password" component={ForgotPasswordPage} />
      </div>
    </Router>
  );
}

export default App;
