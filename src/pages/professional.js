import './professional.css';
import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { withRouter, Router, NavLink, Route, Switch, useLocation } from 'react-router-dom';
import { createMemoryHistory } from 'history'


import Projects from './professional/projects.js'
import Resume from './professional/resume.js'
import Skills from './professional/skills.js'

const pageVariants = {
  initial: {
    opacity: 0,
    x: "-100vw",
    scale: 0.8
  },
  in: {
    opacity: 1,
    x: 0,
    scale: 1,
    duration: 1,
  },
  out: {
    opacity: 0,
    x: "100vw",
    scale: 1.2,
    duration: 1
  }
};

const pageTransition = {
  ease: "easeOut",
  type: 'tween',
  duration: 0.5
};
const pageStyle = {
  position: "absolute"
};



const professionalVariants = {
  initial: { opacity: 1 },
  in: { opacity: 1 },
  out: { opacity: 1 },
}

const leftVariant = {
  initial: { width: '50%' },
  in: { 'width': '5%', 'min-width': '50px' },
  out: { width: '50%' },
}
const rightVariant = {
  initial: { width: '50%' },
  in: { width: '95%' },
  out: { width: '50%' },
}

const fadeVariant = {
  initial: { opacity: 0 },
  in: { opacity: 1 },
  out: { opacity: 0 },
}

const NavBar = (props) => {
  return (
    <nav className="professional-nav">
      <a onClick={() => { props.memoryHistory.push("/projects") }} className={(props.url == "/" || props.url == "/projects") ? "activePage" : {}}>Projects</a>
      <a onClick={() => { props.memoryHistory.push("/skills") }} className={props.url == "/skills" ? "activePage" : {}} >Skills</a>
      <a onClick={() => { props.memoryHistory.push("/resume") }} className={props.url == "/resume" ? "activePage" : {}}>Resume</a>
    </nav>
  )
}

function Professional() {
  const memoryHistory = createMemoryHistory("/");
  return (

    <motion.div
      style={pageStyle}
      initial="initial"
      animate="in"
      exit="out"
      variants={professionalVariants}
      transition={pageTransition}
      className="professional"
    >
      <motion.div transition={pageTransition} variants={leftVariant} className="professional-home">
        <Link to="/home">
          <motion.div transition={pageTransition} variants={fadeVariant} >
            <img src={require("../images/collapse-arrow.png")} className="right-arrow" />
          </motion.div>
        </Link>
      </motion.div>
      <motion.div transition={pageTransition} variants={rightVariant} className="professional-professional">
        <motion.div transition={pageTransition} variants={fadeVariant} className="professional-container">

          <Router history={memoryHistory}>
            <AnimatePresence exitBeforeEnter>


              <Switch>
                <>
                  <Route path="/" component={() => <NavBar url={memoryHistory["location"]["pathname"]} memoryHistory={memoryHistory} />} />
                  <div className="professional-content-container">
                    <Route path="/projects" component={Projects} />
                    <Route path="/skills" component={Skills} />
                    <Route path="/resume" component={Resume} />
                    <Route exact path="/" component={Projects} />
                  </div>
                </>
              </Switch>
            </AnimatePresence>


          </Router>

        </motion.div>
      </motion.div>
    </motion.div>
  );
}



export default withRouter(Professional)
