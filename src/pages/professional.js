import './personal.css';
import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'

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



const homeVariants = {
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
        variants={homeVariants}
        transition={pageTransition}
        className="home"
      >
      <motion.a transition={pageTransition} variants={leftVariant} href="home" className="home-personal">
        <img src={require("../images/collapse-arrow.png")} className="left-arrow"/>
      </motion.a>
      <motion.a  transition={pageTransition} variants={rightVariant} className="home-professional">
        hiiiii This is my professional
      </motion.a>
      </motion.div>
  );
}



export default Professional
