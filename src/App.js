import React from "react";
import "./App.css";
import Loginpage from "./components/Loginpage";
import { Switch, Route, Router } from "react-router-dom";
import history from "./history";
import Selectmail from "./components/Selectmail";

function App() {
  return (
    <div className="App">
      <Router history={history}>
        <Switch>
          <Route exact path="/">
            <Loginpage />
          </Route>
          <Route exact path="/selectmail">
            <Selectmail />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
