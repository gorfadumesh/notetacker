import React from "react";
import LogIn from "../screens/LogIn";
import HomeScreen from "../screens/HomeScreen";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import PublicRoute from "./PublicRoute";
export default function Routes() {
  return (
    <Router>
      <Switch>
        <PublicRoute path="/login" Component={LogIn} />
        <PublicRoute path="/home" Component={HomeScreen} />
      </Switch>
    </Router>
  );
}
