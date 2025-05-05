import React from "react";
import photo from "../assets/images/landscape.jpg"
import '../assets/css/aboutme.scss'

export default function App() {
  return (
    <aboutme>
      <div>
        <h2>About me</h2> <div className='hr'></div>
      </div>
      <div className='aboutWrap'>
        <p className='description'>
        Hi! My name is <span class='accented'>Vibhuv Sharma</span>. I'm a Junior attending 
        Montgomery High School in New Jersey. My goal is to be able to use science and engineering to create 
        change and make an impact on others. My programming journey started in 2020 when I began to 
        learn <span class='accented'>python</span>, and continued in 2021 when I 
        began to learn full-stack development - specifically, using <span class='accented'>React.js</span>
        &nbsp;and <span class='accented'>Node.js</span> to create full-fledged user experiences. Since then,
        I've delved into science, math, techology, and engineering.
        <br/><br/>
        Now, I'm moving towards doing science and engineering <span class='accented'>to make an impact</span> 
        &nbsp;and expanding my education to learn as much as I can..
        </p>
        <img className='photo' src={photo}/>
      </div>
    </aboutme>
  );
}