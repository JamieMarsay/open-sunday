import React, { FunctionComponent } from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Switch,
  Route
} from "react-router-dom";
import Results from "@Views/Results/Results";
import Main from "@Components/Main/Main";
import FourOhFour from "@Views/404/404";
import Home from "@Views/Home/Home";

const routes = [
  {
    view: Home,
    path: "/home"
  },
  {
    view: Results,
    path: "/results/:type/:location"
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
        {routes.map(({ view, path }, index) => (
          <Route
            component={() => <Main Current={view} />}
            path={path}
            key={index}
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
