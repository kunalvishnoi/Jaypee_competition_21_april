import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Welcome from "./Welcome";
import Login from "./Login";
import Signup from "./Signup";
import Start from "./Start";
class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Switch>
          <Route path="/" component={Welcome} exact />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/start" component={Start} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
