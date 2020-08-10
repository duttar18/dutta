import './professional.css';
import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import {Link} from 'react-router-dom'

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
  initial: {opacity: 1},
  in: { opacity: 1 },
  out: { opacity: 1 },
}

const leftVariant = {
  initial: {width: '50%' },
  in: { width: '5%' },
  out: { width: '50%' },
}
const rightVariant = {
  initial: {width: '50%' },
  in: { width: '95%' },
  out: { width: '50%' },
}


function Professional() {
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
          <img src={require("../images/collapse-arrow.png")} className="right-arrow"/>
        </Link>
      </motion.div>
      <motion.div  transition={pageTransition} variants={rightVariant} className="professional-professional">
        hiiiii This is my professional
      </motion.div>
      </motion.div>
  );
}



export default Professional
