import React from "react";
import "./App.css";
import Loginpage from "./components/Loginpage";
import { Switch, Route, Router } from "react-router-dom";
import Signup from "./components/Signup";
import history from "./history";

function App() {
  return (
    <div className="App">
      <Router history={history}>
        <Switch>
          <Route exact path="/">
            <Loginpage />
          </Route>
          <Route exact path="/Signup">
            <Signup />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
