import React from "react";
import { Switch, Route } from "react-router-dom";
import Welcome from "./pages/welcome";
import Skills from "./pages/skills";
import Career from "./pages/career";
import Contact from "./pages/contact";

const Router = () => {
  return (
    <Switch>
      <Route exact path="/" component={Welcome} />
      <Route exact path="/skills" component={Skills} />
      <Route exact path="/career" component={Career} />
      <Route exact path="/contact" component={Contact} />
    </Switch>
  );
};

export default Router;
