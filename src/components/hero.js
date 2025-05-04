import React, { useState, useEffect } from 'react';
import Typewriter from "typewriter-effect";
import vector from "../assets/images/programming.svg";

import '../assets/css/hero.scss';

function App() {
  return (
    <container>
      <wrap>
        <p className='welcome'>Hi! My name is</p>
        <h1 className='bigger'>Vibhuv Sharma</h1>
        <div className='typewriter'>
          <h1>I am&nbsp;</h1>
          <h1> 
            <Typewriter
              options={{
                delay: 250,
                strings: [ 
                  "a Student",
                  "a Programmer",
                  "a Researcher",
                  "an Engineer",
                  "a Volunteer",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>
        </div>
        <p>
          Current junior at Montgomery High School who's interested in all things science, engineering, math, and politics. 
          I love learning more about diverse fields and about their intersections.
        </p>
        <a href='resume.pdf' target='__blank'>
          <button>
            View my Resume
          </button>
        </a>
      </wrap>
      <img src={vector}></img>

    </container>
  )
}

export default App;
