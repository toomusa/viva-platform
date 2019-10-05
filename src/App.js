import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Header from "./components/Header"
import Navbar from "./components/Navbar"
import Home from './pages/Home';
import Journey from './pages/Journey';
import Resources from './pages/Resources';
import Partners from './pages/Partners';

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <Header />
        </div>
        <div className="col-12">
          <Navbar />
        </div>
        <div className="col-md-10 col-sm-12 col-xs-12 offset-md-1">
          <Router>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/dashboard" component={Journey} />
              <Route exact path="/profile" component={Resources} />
              <Route exact path="/explorer" component={Partners} />
            </Switch>
          </Router>
        </div>
      </div>
    </div>
  );
}

export default App;
