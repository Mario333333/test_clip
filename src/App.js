import React from "react";
import { Route, Switch } from "react-router-dom";
import { getURLByRouteName } from "./utils/routes";
import Home from "./views/Home";

const App = () => {
  return (
    <Switch>
      <Route exact path={getURLByRouteName("home")} component={Home} />
    </Switch>
  );
};

export default App;
