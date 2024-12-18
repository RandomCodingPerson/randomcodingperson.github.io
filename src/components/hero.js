import React, { useState, useEffect } from 'react';
import Typewriter from "typewriter-effect";
import vector from "../assets/images/programming.svg";

import '../assets/css/hero.scss';

function App() {
  return (
    <container>
      <wrap>
        <p className='welcome'>Hi! My name is</p>
        <h1>Vibhuv Sharma</h1>
        <div className='typewriter'>
          <h1>I am&nbsp;</h1>
          <h1> 
            <Typewriter
              options={{
                strings: [ 
                  "a Student",
                  "a Programmer",
                  "a Designer",
                  "an Engineer",
                  "a Volunteer"
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>
        </div>
        <p>
          I am a sophomore at Montgomery High School and a developer who is passionate about using
          technology to solve real problems that we face in our lives.
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
