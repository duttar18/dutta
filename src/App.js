import './App.css';
import React from 'react'
import { withRouter, Route, Switch, useLocation } from 'react-router-dom';
import { AnimatePresence } from "framer-motion"


import Home from './pages/home'
import Professional from './pages/professional'
import Personal from './pages/personal'


function App() {
  const location = useLocation();
  return (
    
      

        <AnimatePresence exitBeforeEnter>  
          <Switch location={location} key={location.pathname}>
            <Route path="/personal" component={Personal}/>
            <Route path="/professional" component={Professional}/>
            <Route path={["/home","/"]} component={Home} />
          </Switch>
        </AnimatePresence>

  )
}


export default withRouter(App);
