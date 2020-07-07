import React from "react";
import { Route } from "react-router-dom";
import NotFoundPage from "./pages";

const App = function () {
  return (
    <>
      <Route component={NotFoundPage} />
    </>
  );
};
export default App;
