import './home.css';
import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'


function Home() {
  return (
    <div className="home">
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
    </div>
  );
}



export default Home
