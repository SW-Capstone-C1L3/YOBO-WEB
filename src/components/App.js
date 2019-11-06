import React, { Component } from "react";
import { BrowserRouter,Switch, Route } from "react-router-dom";
import { Main, Auth, NotFound } from "../pages";

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
        <Switch>
          <Route path="/" exact={true} component={Main} />
          <Route path="/auth/:kind" exact={true} component={Auth} />
          <Route component={NotFound} />
        </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;