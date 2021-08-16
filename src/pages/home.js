import './home.css';
import React from 'react'
import { motion } from 'framer-motion'
import {withRouter,Link} from 'react-router-dom'

const personalVariants = {
  initial: {opacity: 1},
  in: { opacity: 1 },
  out: { opacity: 1 },
}

const pageTransition = {
  ease: "easeOut",
  type: 'tween',
  duration: 0.3
};
const pageStyle = {
  position: "absolute"
};

const fadeVariant = {
  initial: {opacity: 0},
  in: { opacity: 1 },
  out: { opacity: 0 },
}

function Home() {
  return (
    <motion.div
      style={pageStyle}
      initial="initial"
      animate="in"
      exit="out"
      variants={personalVariants}
      transition={pageTransition}
      className="home"
    >

      <Link to="/personal" className="home-personal">
        <motion.div transition={pageTransition} variants={fadeVariant}>
          
            <div className="first-name">Raul</div>
            <hr className="home-personal-hr" />
            <p className="home-personal-p" >personal</p> <br/>
            <p className="home-personal-scratch">--Made Fro</p>
        </motion.div>
      </Link>
      <Link to="professional" className="home-professional">
        <motion.div transition={pageTransition} variants={fadeVariant} >
            <div className="contact">
              Raul Dutta<br/>
              duttar@umich.edu<br/>
              248-225-7238 <br/>
              MSE Computer Vision<br/>
              BSE Computer Science<br/>
              <img className="umich" src={require("./homeImages/umich.png")}/>
            </div>
            <div className="last-name">Dutta</div>
            <hr className="home-professional-hr" />
            <p className="home-professional-p" >professional</p> <br/>
            <p className="home-professional-scratch">m Scratch--</p>
        </motion.div>
      </Link>
      <motion.div transition={pageTransition} variants={fadeVariant} >
        <div className="links">
          <a target="_blank" rel="noopener noreferrer" href="https://github.com/duttar18"><img src={require("./homeImages/github.png")}/></a>
          <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/rauldutta/"><img src={require("./homeImages/linkedin.png")}/></a>
        </div>
        <div className="looking">
          <img className="bionocular" src={require("./homeImages/bionocular.png")}/>
          <p><b>Seeking New Grad Roles starting Summer 2022:</b></p>
          <p>Backend</p>
          <p>FullStack</p>
          <p>Product Management</p>
        </div>
      </motion.div>
    </motion.div>
  );
}



export default withRouter(Home)
