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
              Ann Arbor, MI<br/>
              duttar@umich.edu<br/>
              1-248-524-2419
            </div>
            <div className="last-name">Dutta</div>
            <hr className="home-professional-hr" />
            <p className="home-professional-p" >professional</p> <br/>
            <p className="home-professional-scratch">m Scratch--</p>
        </motion.div>
      </Link>
    </motion.div>
  );
}



export default withRouter(Home)
