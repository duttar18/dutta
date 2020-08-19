
import React, { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { withRouter, Router, NavLink, Route, Switch, useLocation } from 'react-router-dom';
import { createMemoryHistory } from 'history'
import './projects.css';

function Projects() {
  const [projects, setProjects] = useState(require('./projects.json'))

  return (
    <div className="project-container-container">
      <div className="project-container" style={{ borderRight: "1px solid var(--pro2)" }} >
        <h1>Passion Projects</h1>
        <div className="project-subcontainer">

          {projects.map((project)=>(
            <>
              <div class="project-card">
                <div class="project-card-inner">

                  <div class="project-card-front">
                    <h1>{project.title}</h1>
                    <img src={require('./projectImages/'+project.imageUrl)}/>

                    <div className="info">
                      <b className="role">{project.role}</b>
                      <b className="location">{project.location}</b>
                      <b className="date">{project.date}</b>
                    </div>
                  </div>

                  <div class="project-card-back">
                    <div>{project.description}</div>
                    <div className="technologies">
                      {project.technologies.map((technology)=>(
                        <div>{technology}</div>
                      ))}
                    </div>
                  </div>


                </div>
              </div>



            </>
          ))}


        </div>
      </div>
      <div className="project-container">
        <h1>Hackathons</h1>
        <div className="project-subcontainer">
          asdfadfasda
        </div>
      </div>
    </div>
  );
}



export default withRouter(Projects)
