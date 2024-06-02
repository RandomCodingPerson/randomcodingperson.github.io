import React, { useState, useEffect } from 'react';
import '../assets/css/skills.scss';
import skills from '../assets/data/skills.js'

export default function App() {
  const [isVisible, setIsVisible] = useState(false);

  function showMore (e) {
    console.log("in!"); 
    setIsVisible(!isVisible);
    console.log(isVisible);
  }

  useEffect(() => {
    console.log("isVisible", isVisible);
  }, [isVisible]);

  console.log("isVisible", isVisible, setIsVisible);

  return (
    <skills>
      <div class='fadeWrap'>
        <div class='innerWrap'>
        <h2>Skills</h2><div className='hr'></div>

        <div class='skillsContainer'>
          
          { skills.map((x, i) => {

            
            if (i <= 5 || (i> 5 && isVisible)) {
              let time = new Date().getFullYear() - x.year;
              console.log("HERE", i, x)
            return (
              <div class='skillBox'>
                <img src={x.image}></img>
                <div>
                  <h4>{x.skill}</h4>
                  <p>{time} {(time > 1) ? ("years") : ("year")}</p>
                </div>
              </div>
            )
          } 
          } )}

        </div>
        </div>
        </div>

        <div className='innerWrap'>
        {(isVisible) ? (
          <button onClick={showMore}>Show less</button>
        ) : (
          <button onClick={showMore}>Show more</button>
        )
        }
        </div>
    </skills>
  );
}