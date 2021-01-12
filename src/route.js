import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./components/home";
import Hooks from "./components/hooks";

const Routes = () => (
  <Router>
    <Switch>
      <Route path="/:hook" component={Hooks} />
      <Route exact path="/" component={Home} />
    </Switch>
  </Router >
)

export default Routes;