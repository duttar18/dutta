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
  type: "tween",
  ease: "anticipate",
  duration: 0.5
};
const pageStyle = {
  position: "absolute"
};


function Personal() {
  return (
      <motion.div
        style={pageStyle}
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={pageTransition}
        className="home"
      >
      <a className="home-personal">
        hiiiii This is my personal
      </a>
      <a href="home" className="home-professional">
        <h1>Dutta</h1>
        <hr/>
        <p>home</p>
      </a>
      </motion.div>
  );
}



export default Personal
