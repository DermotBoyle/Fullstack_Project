import React from "react";
import { Switch, Route } from "react-router-dom";
import { NavLink } from "react-router-dom";
import Home from "./home";
import Timer from "./Timer";
import Counter from "./counter";
import AlbumApi from "./adiosapi.js";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <div className="navbar">
        <NavLink activeClassName="selected" to="/">
          Home
        </NavLink>
        <NavLink activeClassName="selected" to="/counter">
          Counter
        </NavLink>
        <NavLink activeClassName="selected" to="/adiosapi">
          Albums API
        </NavLink>
        <NavLink activeClassName="selected" to="/Timer">
          Timer
        </NavLink>
      </div>

      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/Timer" component={Timer} />
        <Route path="/counter" component={Counter} />
        <Route path="/adiosapi" component={AlbumApi} />
      </Switch>
    </React.Fragment>
  );
}

export default App;
