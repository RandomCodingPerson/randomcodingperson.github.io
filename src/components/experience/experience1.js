import React from "react";
import '../../assets/css/experience.scss'
import '../../assets/css/global.scss'
import codeNinjas from '../../assets/images/CodeNinjas.jpg';

export default function App() {
  return (
    <experience>
    <h2>Experience</h2> <div className='hr'></div>
    
    <div className='projectBox'>
      <img src={codeNinjas}/>
      <h2>Intern — <span className='company'>Code Ninjas</span></h2>
      <h4>June 2022 - Present</h4>
      <ul>
        <p><span class='bullet'/>Helped teach students and gave guidance through programming challenges.</p>
        <p><span class='bullet'/>Used and applied established skills to aid children generally aged 8-14.</p>
      </ul>
    </div>
    </experience>
  );
}