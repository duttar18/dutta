import './home.css';
import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import {withRouter} from 'react-router-dom'

const personalVariants = {
  initial: {opacity: 1},
  in: { opacity: 1 },
  out: { opacity: 1 },
}

const pageTransition = {
  ease: "easeOut",
  type: 'tween',
  duration: 0.5
};
const pageStyle = {
  position: "absolute"
};

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
      <a href="/personal" className="home-personal">
        <div className="name">Raul</div>
        <hr/>
        <p>personal</p>
      </a>
      <a href="/professional" className="home-professional">
        <div className="name">Dutta</div>
        <hr/>
        <p>professional</p>
      </a>
    </motion.div>
  );
}



export default withRouter(Home)
