import React from "react";
import { Route } from "react-router-dom";
const PublicRoute = (props) => {
  const { Component } = props;
  return (
    <Route {...props} exact>
      <Component />
    </Route>
  );
};

export default PublicRoute;
