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
                  "a Violinist",
                  "a Volunteer"
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>
        </div>
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
