import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import dashboard from "./pages/Dashboard";
import allExpence from "./pages/AllExpences";
import addNewExpence from "./pages/NewExpence";
import viewedExpence from "./pages/viewedExpence";

function App() {
  return (
    <Router>
      <Switch>
        <>
          <Route path="/" exact component ={dashboard}/>
          <Route path="/addExpence" exact component ={addNewExpence}/>
          <Route path="/expence" exact component ={allExpence}/>
          <Route path="/updateExpence/:id" exact component ={viewedExpence}/>
          
        </>
      </Switch>
    </Router>
  );
}

export default App;
