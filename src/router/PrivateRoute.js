import React from "react";
import { Route, useHistory } from "react-router-dom";
const PrivateRoute = (props) => {
  const history = useHistory();
  const { Component } = props;
  if (!localStorage.getItem("token")) {
    history.push("/login");
  }
  return (
    <Route {...props} exact>
      <Component />
    </Route>
  );
};

export default PrivateRoute;
