import React from "react";
import "bootswatch/dist/lux/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./component/layout/Navbar";
import Alert from "./component/layout/Alert";
import About from "./component/pages/About";
import User from "./component/users/User";
import GithubState from "./context/github/GithubState";
import AlertState from "./context/alert/AlertState";
import Home from "./component/pages/Home";
import PageNotFound from "./component/pages/PageNotFound";

const App = () => {
  return (
    <GithubState>
      <AlertState>
        <Router>
          <div className="App">
            <Navbar />
            <Alert />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/about" component={About} />
              <Route exact path="/user/:login" component={User} />
              <Route component={PageNotFound} />
            </Switch>
          </div>
        </Router>
      </AlertState>
    </GithubState>
  );
};

export default App;
