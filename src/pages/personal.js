import './personal.css';
import React from 'react'
import { motion } from 'framer-motion'
import { withRouter, Link } from 'react-router-dom'





const pageTransition = {
  ease: "easeOut",
  type: 'tween',
  duration: 0.5
};
const pageStyle = {
  position: "absolute"
};



const personalVariants = {
  initial: { opacity: 1 },
  in: { opacity: 1 },
  out: { opacity: 1 },
}

const leftVariant = {
  initial: { width: '50%' },
  in: { width: '95%' },
  out: { width: '50%' },
}
const rightVariant = {
  initial: { width: '50%' },
  in: { width: '5%' },
  out: { width: '50%' },
}

const fadeVariant = {
  initial: { opacity: 0 },
  in: { opacity: 1 },
  out: { opacity: 0 },
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
        <motion.div transition={pageTransition} variants={fadeVariant} >
          <h1 className="comingSoon">Coming Soon</h1>
          <div className="logo" >
            <div>
              <div>Raul</div>
              <div>Raul</div>
              <div>Raul</div>
              <div>Raul</div>
            </div>
            <div>
              <div>Raul</div>
              <div>Raul</div>
              <div>Raul</div>
              <div>Raul</div>
            </div>
            <div>
              <div>Raul</div>
              <div>Raul</div>
              <div>Raul</div>
              <div>Raul</div>
            </div>

          </div>



        </motion.div>
      </motion.div>
      <motion.div transition={pageTransition} variants={rightVariant} className="personal-home">
        <Link to="/home">
          <motion.div transition={pageTransition} variants={fadeVariant} >
            <img src={require("../images/collapse-arrow.png")} className="left-arrow" />
          </motion.div>
        </Link>
      </motion.div>
    </motion.div>

  );
}



export default withRouter(Personal)
