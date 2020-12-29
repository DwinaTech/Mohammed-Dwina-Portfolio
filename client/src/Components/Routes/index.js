import React from "react";
import { Route } from "react-router-dom";
import Home from "../Home";
import About from "../About";
import Contact from "../Contact";
import Experience from "../Experience";

const Routes = () => {
  return (
    <React.Fragment>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/experience" component={Experience} />
    </React.Fragment>
  );
};

export default Routes;
