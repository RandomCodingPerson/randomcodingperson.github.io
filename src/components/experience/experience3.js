import React from "react";
import '../../assets/css/experience.scss'
import '../../assets/css/global.scss'
import seekerpitch from '../../assets/images/seekerpitch.jpg'

export default function App() {
  return (
    <experience>
    <h2>Experience</h2> <div className='hr'></div>
    <div className='projectBox'>
      <img src={seekerpitch}/>
      <h2>Full Stack Intern — <span className='company'>Seekerpitch</span></h2>
      <h4>December 2022 - June 2021</h4>
      <p><span class='bullet'/>Built backend API for website using Javascript, SailsJS, and PostgreSQL.</p>
      <p><span class='bullet'/>Frontend development and integration via React.</p>
      <p><span class='bullet'/>Implemented OpenTok video conferencing, SendGrid emails.</p>
      <p><span class='bullet'/>Key member of development team.</p>
    </div>
    </experience>
  );
}