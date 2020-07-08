import React from "react";
import { Route, Switch } from "react-router-dom";
import { NotFoundPage, Home } from "./pages";

const App = function () {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="*" component={NotFoundPage} />
      </Switch>
    </>
  );
};
export default App;
