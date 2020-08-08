import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Loginpage from "./components/Loginpage";
import { Switch, Route, Router } from "react-router-dom";
import history from "./history";
import Selectmail from "./components/Selectmail";
import Allmails from "./components/Allmails";

function App() {
  return (
    // <Router history={history}>
    //   <Switch>
    //     <Route exact path="/">
    //       <Loginpage />
    //     </Route>
    //     <Route exact path="/selectmail">
    //       <Selectmail />
    //     </Route>
    //   </Switch>
    // </Router>
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
