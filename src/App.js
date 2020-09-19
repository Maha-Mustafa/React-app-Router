import React from 'react';
import './App.css';
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Tutorials from "./components/Tutorials";
import Blog from "./components/Blog";
import Login from "./components/Login";
import Community from "./components/Community";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
        <Route path="/" exact><Home/></Route>
        <Route path="/tutorials"><Tutorials/></Route>
        <Route path="/blog"><Blog/></Route>
        <Route path="/login"><Login/></Route>
        <Route path="/community"><Community/></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
