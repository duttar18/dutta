import './personal.css';
import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import {withRouter,Link} from 'react-router-dom'





const pageTransition = {
  ease: "easeOut",
  type: 'tween',
  duration: 0.5
};
const pageStyle = {
  position: "absolute"
};



const personalVariants = {
  initial: {opacity: 1},
  in: { opacity: 1 },
  out: { opacity: 1 },
}

const leftVariant = {
  initial: {width: '50%' },
  in: { width: '95%' },
  out: { width: '50%' },
}
const rightVariant = {
  initial: {width: '50%' },
  in: { width: '5%' },
  out: { width: '50%' },
}


function Personal() {
  return (
      
      <motion.div
        style={pageStyle}
        initial="initial"
        animate="in"
        exit="out"
        variants={personalVariants}
        transition={pageTransition}
        className="personal"
      >
      <motion.div transition={pageTransition} variants={leftVariant} className="personal-personal">
        hiiiii This is my personal
      </motion.div>
      <motion.div  transition={pageTransition} variants={rightVariant} className="personal-home">
        <Link to="/home">
          <img src={require("../images/collapse-arrow.png")} className="left-arrow"/>
        </Link>
      </motion.div>
      </motion.div>
  );
}



export default withRouter(Personal)
