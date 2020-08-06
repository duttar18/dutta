import './App.css';
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch, Link, NavLink } from 'react-router-dom'
import { CSSTransition } from 'react-transition-group'
import { Container, Navbar, Nav } from 'react-bootstrap'

import Home from './pages/home'
import Professional from './pages/professional'
import Personal from './pages/personal'

function App() {
  return (
    <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/personal">
            <Personal />Hiiii
          </Route>
          <Route path="/professional">
            <Professional />
          </Route>
        </Switch>
    </Router>
  )
}


export default App;
