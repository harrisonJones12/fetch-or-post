import React from "react";
import { Fetch } from "./components/Fetch";
import Main from "./containers/Main";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/fetch" component={Fetch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
