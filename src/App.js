import './App.css';
import React from 'react'
import { BrowserRouter as Router, NavLink, Route, Switch, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from "framer-motion"


import Home from './pages/home'
import Professional from './pages/professional'
import Personal from './pages/personal'


class App extends React.Component {
  constructor(props) {
      // Initialize mutable state
      super(props);
  }
  render() {
    return(
      <Router>
         <nav>
           
          {/* <ul className="nav nav-pills flex-column">
            <li className="nav-item">
              <NavLink to="/" exact className="nav-link text-white">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/personal" className="nav-link text-white">
                Personal
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/professional" className="nav-link text-white">
                Professional
              </NavLink>
            </li>
          </ul>  */}
        </nav>
        <AnimatePresence exitBeforeEnter>  
          <Switch location={window.location} key={window.location.pathname}> 
            <Route exact path={["/home","/"]} component={Home} />
            <Route path="/personal" component={Personal}/>
            <Route path="/professional" component={Professional}/>
          </Switch>
        </AnimatePresence>
      </Router>
    )
  }
}


export default App;
