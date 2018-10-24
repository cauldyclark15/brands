import React, { Component } from "react";
import { createBrowserHistory } from "history";
import { HashRouter, Route, Switch } from "react-router-dom";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import { AppProvider } from "./appContext";
import "assets/scss/material-dashboard-pro-react.css?v=1.4.0";

const history = createBrowserHistory();

class ClientApp extends Component {
  state = {
    authenticated: false,
    auth: () => {
      this._auth();
    },
    unauth: () => {
      this._unauth();
    }
  };

  _auth = () => {
    Promise.resolve(localStorage.setItem("auth-token", "1515")).then(() =>
      this.setState({ authenticated: true })
    );
  };

  _unauth = () => {
    Promise.resolve(localStorage.removeItem("auth-token")).then(() =>
      this.setState({ authenticated: false })
    );
  };

  componentDidMount() {
    const token = localStorage.getItem("auth-token");

    if (token && token === "1515") {
      history.push("/");
    } else {
      history.push("/login");
    }
  }

  render() {
    return (
      <HashRouter history={history}>
        <AppProvider value={this.state}>
          <Switch>
            <Route path="/" component={Dashboard} exact />
            <Route path="/login" component={Login} />
          </Switch>
        </AppProvider>
      </HashRouter>
    );
  }
}

export default ClientApp;
