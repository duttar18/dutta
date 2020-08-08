import './home.css';
import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'


function Home() {
  return (
    <div className="home">
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
    </div>
  );
}



export default Home
