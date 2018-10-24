import React, { Component } from "react";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import "assets/scss/material-dashboard-pro-react.css?v=1.4.0";

const history = createBrowserHistory();

class ClientApp extends Component {
  state = {};

  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route path="/" component={Dashboard} exact />
          <Route path="/login" component={Login} />
        </Switch>
      </Router>
    );
  }
}

export default ClientApp;
