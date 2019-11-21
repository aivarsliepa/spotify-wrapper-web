import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Main from "../pages/main/Main";

const LoggedInRoutes: React.FC = () => (
  <Switch>
    <Route exact path="/" component={Main} />
    <Redirect to="/" />
  </Switch>
);

export default LoggedInRoutes;
