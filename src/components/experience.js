import React from "react";
import '../assets/css/experience.scss'
import '../assets/css/global.scss'
import codeNinjas from '../assets/images/CodeNinjas.jpg';
import mpa from '../assets/images/mpa.png'
import seekerpitch from '../assets/images/seekerpitch.jpg'

export default function App() {
  
  var acc = document.getElementsByClassName("accordion");
  var i;

  function clickAcc(e) {
    console.log('this is e', e)
    e.target.classList.toggle("active");
    var panel = e.target.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  }


  return (
    <experience>
    <h2>Experience</h2> <div className='hr'></div>
    
    <div className='expTable'>
    <button class="accordion" onClick={clickAcc}>Intern -&nbsp;<span className='company'>Code Ninjas</span></button>
<div class="panel" id='fpanel'>
  <p className='dates'>June 2022 - Present</p>
<ul>
        <p><span class='bullet'/>Helped teach students and gave guidance through programming challenges.</p>
        <p><span class='bullet'/>Used and applied established skills to aid children generally aged 8-14.</p>
      </ul>
</div>

<button class="accordion" onClick={clickAcc}>Software Developer Volunteer —&nbsp;<span className='company'>Minority Programmers Association</span></button>
<div class="panel">
  <p className='dates'>September 2021 - December 2021</p>
<p><span class='bullet'/>Implemented UI designs in NextJS.</p>
      <p><span class='bullet'/>Major role in developing mentorship pages.</p>
      <p><span class='bullet'/>Blockchain experience using solidity and Moralis and integrating in React.</p>
</div>

<button class="accordion" onClick={clickAcc}>Full Stack Intern —&nbsp;<span className='company'>SeekerPitch</span></button>
<div class="panel">
  <p className='dates'>December 2020 - June 2021</p>
<p><span class='bullet'/>Built backend API for website using Javascript, SailsJS, and PostgreSQL.</p>
      <p><span class='bullet'/>Frontend development and integration via React.</p>
      <p><span class='bullet'/>Implemented OpenTok video conferencing, SendGrid emails.</p>
      <p><span class='bullet'/>Key member of development team.</p>
</div>
    </div>

    
    </experience>
  );
}



























/*
<div className='projectBox'>
      <img src={codeNinjas}/>
      <h2>Intern — <span className='company'>Code Ninjas</span></h2>
      <h4>June 2022 - Present</h4>
      <ul>
        <p><span class='bullet'/>Helped teach students and gave guidance through programming challenges.</p>
        <p><span class='bullet'/>Used and applied established skills to aid children generally aged 8-14.</p>
      </ul>
    </div>
    <div className='projectBox'>
      <img src={mpa}/>
      <h2>Software Developer Volunteer — <span className='company'>MPA</span></h2>
      <h4>September 2021 - December 2021</h4>
      <p><span class='bullet'/>Implemented UI designs in NextJS.</p>
      <p><span class='bullet'/>Major role in developing mentorship pages.</p>
      <p><span class='bullet'/>Blockchain experience using solidity and Moralis and integrating in React.</p>
    </div>
    <div className='projectBox'>
      <img src={seekerpitch}/>
      <h2>Full Stack Intern — <span className='company'>Seekerpitch</span></h2>
      <h4>December 2022 - June 2021</h4>
      <p><span class='bullet'/>Built backend API for website using Javascript, SailsJS, and PostgreSQL.</p>
      <p><span class='bullet'/>Frontend development and integration via React.</p>
      <p><span class='bullet'/>Implemented OpenTok video conferencing, SendGrid emails.</p>
      <p><span class='bullet'/>Key member of development team.</p>
    </div>

    */