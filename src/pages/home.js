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
    scale: 1
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


function Home() {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      className="home"
    >
    <a href="/personal" className="home-personal">
      <h1>Raul</h1>
      <hr/>
      <p>personal</p>
    </a>
    <a href="/professional" className="home-professional">
      <h1>Dutta</h1>
      <hr/>
      <p>professional</p>
    </a>
    </motion.div>
  );
}



export default Home
