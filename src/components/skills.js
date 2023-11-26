import React from "react";
import '../assets/css/skills.scss';
import skills from '../assets/data/skills.js'

export default function App() {
  return (
    <skills>
        <h2>Skills</h2><div className='hr'></div>

        <div class='skillsContainer'>
          
          { skills.map((x) => {

            return (
              <div class='skillBox'>
                <img src={x.image}></img>
                <div>
                  <h4>{x.skill}</h4>
                  <p>{x.time} years</p>
                </div>
              </div>
            )
          } )}
          
          

        </div>
    </skills>
  );
}