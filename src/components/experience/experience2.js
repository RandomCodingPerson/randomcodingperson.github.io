import React from "react";
import '../../assets/css/experience.scss'
import '../../assets/css/global.scss'
import mpa from '../../assets/images/mpa.png';

export default function App() {
  return (
    <experience>
    <h2>Experience</h2> <div className='hr'></div>
    <div className='projectBox'>
      <img src={mpa}/>
      <h2>Software Developer Volunteer — <span className='company'>MPA</span></h2>
      <h4>September 2021 - December 2021</h4>
      <p><span class='bullet'/>Implemented UI designs in NextJS.</p>
      <p><span class='bullet'/>Major role in developing mentorship pages.</p>
      <p><span class='bullet'/>Blockchain experience using solidity and Moralis and integrating in React.</p>
    </div>
    </experience>
  );
}