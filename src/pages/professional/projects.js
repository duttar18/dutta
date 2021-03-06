
import React, { useState } from 'react'
import { withRouter} from 'react-router-dom';
import './projects.css';

function Card(props){
  const [flipped,setFlipped] = useState(false);
  return (
    <div className="project-card">
        <div className={ flipped ? "project-card-inner is-flipped" : "project-card-inner"} >


        <div className="project-card-front">
          <h1>{props.project.title}</h1>
          {props.project.hackathon &&
            <b>{props.project.hackathon}</b>
          }
          <img src={require('./projectImages/'+props.project.imageUrl)}/>

          <div className="info">
            <b className="role">{props.project.role}</b>
            <b className="location">{props.project.location}</b>
            <b className="date">{props.project.date}</b>
          </div>


          {/* <button onClick={()=>{setFlipped(true)}}>flip</button> */}
        </div>

        <div className="project-card-back">
          <div>
            <div>{props.project.description}</div>
            <div className="technologies">
              {props.project.technologies.map((technology)=>(
                <div>{technology}</div>
              ))}
            </div>

          </div>
          {/* <button onClick={()=>{setFlipped(false)}}>flip</button> */}
          <div className="buttonOptions">
            {props.project["repo"] && <div><a href={props.project["repo"]}><b>Repo</b></a></div>}
            {props.project["site"] && <div><a href={props.project["site"]}><b>Site</b></a></div>}
            {props.project["devpost"] && <div><a href={props.project["devpost"]}><b>Devpost</b></a></div>}
          </div>
        </div>
      </div>
    </div>
    )
}


function Projects() {
  const [projects, setProjects] = useState(require('./projects.json').map((project,index)=>{
    return ({...project,"is-flipped" : false,"index":index})
  }));

  // const flipCard = (index) => {
  //   let temp = [...projects];
  //   console.log(temp[index]["is-flipped"])
  //   temp[index]["is-flipped"]= !temp[index]["is-flipped"];
  //   setProjects(temp);
  // }

  return (
    <div className="project-container-container">
      <div className="project-container" style={{ borderRight: "1px solid var(--pro2)" }} >
        <h1>Large Scale Projects</h1>
        <div className="project-subcontainer">

          {projects.filter((project)=>(!project["hackathon"])).map((project)=>(
            <Card project={project}/>
          ))}


        </div>
      </div>

      <div className="project-container">
        <h1>Hackathons</h1>
        <div className="project-subcontainer">
          {projects.filter((project)=>(project["hackathon"])).map((project)=>(
            <Card project={project}/>
          ))}
        </div>
      </div>
    </div>
  );
}



export default withRouter(Projects)
