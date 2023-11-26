import React from "react";
import WildBlue from "../assets/images/WildBlue.jpg";
import PyadaProtocol from "../assets/images/PyadaProtocol.png";
import '../assets/css/projects.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLink } from '@fortawesome/free-solid-svg-icons'
import projects from "../assets/data/projects.js";


export default function App() {
  return (
    <projects>
      <div>
        <h2>Projects</h2> <div className='hr'></div>

        

        <div class='featuredProjectContainer'>
        {
          projects["featuredProjects"].map((x, i) => {
            if(i % 2 == 0) {
            return (
              <div class='featuredProject'>
            <div>
              <h4>Project {x.id}.</h4>
              <h3>{x.name}</h3>
              <div class='description'>
                {x.description}
              </div>
              <ul>
                {
                  x.technologies.map((y) => {
                    return (
                      <li>{y}</li>
                    )
                  })
                }
              </ul>
            </div>
            <img src={x.image}></img>

          </div>
            )
          } else {
            return (
              <div class='featuredProject'>
                <img src={x.image}></img>
            <div className='rightAlign'>
              <h4>Project {x.id}.</h4>
              <h3>{x.name}</h3>
              <div class='description rightAlign'>
                {x.description}
              </div>
              <ul>
                {
                  x.technologies.map((y) => {
                    return (
                      <li>{y}</li>
                    )
                  })
                }
              </ul>
            </div>
            

          </div>
            )
          }
          })
        }
        </div>

        <div class='projects'>

        {projects["projects"].map((x) => {
            return (
              <div class='project'>
            <div class='hWrap'>
              <h3>{x.name}</h3>
              { x.link && 
                <a href={x.link}><FontAwesomeIcon icon={faLink} /></a>
              }
            </div>
            <ul>
                {x.technologies.map((y) => {
                  return (
                  <li>{y}</li>
                  )
                })}
              </ul>
            <p>
              {x.description}
            </p>
          </div>
            )
        })}
                    

        </div>


      </div>
      
    </projects>
  );
}