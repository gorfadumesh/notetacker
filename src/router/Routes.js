import React from "react";
import LogIn from "../screens/LogIn";
import HomeScreen from "../screens/HomeScreen";

import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  Route,
} from "react-router-dom";
import PublicRoute from "./PublicRoute";
import PrivateRoute from "./PrivateRoute";
export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Redirect to={`/login`} />
        </Route>

        <PublicRoute path="/login" Component={LogIn} />
        <PrivateRoute path="/home" Component={HomeScreen} />
      </Switch>
    </Router>
  );
}
