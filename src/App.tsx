import React, { FunctionComponent } from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Switch,
  Route
} from "react-router-dom";
import Main from "@Components/Main/Main";
import FourOhFour from "@Views/404/404";
import Home from "@Views/Home/Home";

const routes = [
  {
    view: Home,
    path: "/home"
  },
  {
    view: FourOhFour,
    path: ""
  }
];

const App: FunctionComponent = () => {
  return (
    <Router>
      <Switch>
        {routes.map(({ view, path }, key) => (
          <Route
            component={() => <Main Current={view} />}
            path={path}
            key={key}
            strict
            exact
          />
        ))}
      </Switch>

      <Route path="/" exact>
        <Redirect to="/home" />
      </Route>
    </Router>
  );
};

export default App;
