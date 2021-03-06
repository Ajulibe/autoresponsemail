import React from "react";
import "./App.css";
import Loginpage from "./components/Loginpage";
import { Switch, Route } from "react-router-dom";
import Selectmail from "./components/Selectmail";
import Allmails from "./components/Allmails";

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Loginpage />
        </Route>
        <Route exact path="/selectmail">
          <Selectmail />
        </Route>
        <Route exact path="/Allmails">
          <Allmails />
        </Route>
      </Switch>
    </>
  );
}

export default App;
