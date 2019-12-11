import React, { Component } from "react";
import { BrowserRouter,Switch, Route } from "react-router-dom";
import { Main, Auth, NotFound,DashBoard,OrderBoard,ProductBoard} from "../pages";

class App extends Component {
  
  render() {
    return (
      <div>
        <BrowserRouter>
        <Switch>
          <Route path="/" exact={true} component={Main} />
          <Route path="/auth" exact={true} component={Auth} />
          <Route path="/main/dashboard" exact={true} component={DashBoard} />
          <Route path="/main/OrderBoard" exact={true} component={OrderBoard} />
          <Route path="/main/ProductBoard" exact={true} component={ProductBoard} />
          
          <Route component={NotFound} />
        </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;