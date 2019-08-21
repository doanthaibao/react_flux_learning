import React from "react";
import { Route, Switch } from "react-router-dom";

import HomePage from "./HomePage";
import AboutPage from "./About";
import Header from "./common/Header";
import CoursesPage from "./CoursesPage";
import NotFoundPage from "./NotFoundPage";

function App() {
  return (
    <div className="container-fluid">
      <Header />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/courses" component={CoursesPage} />
        <Route path="/about" component={AboutPage} />
        <Route component={NotFoundPage} />\
      </Switch>
    </div>
  );
}

export default App;
