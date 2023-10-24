import React from "react";
import photo from "../assets/images/vibhuvsharma.jpeg"
import '../assets/css/aboutme.scss'

export default function App() {
  return (
    <aboutme>
      <div>
        <h2>About me</h2> <div className='hr'></div>
      </div>
      <div className='flex'>
        <p className='halfScreen'>
        Hi! My name is <span class='accented'>Vibhuv Sharma</span>. I'm a junior attending 
        Montgomery High School in New Jersey. My goal is to be able to use technology to create 
        change and make an impact on others. My programming journey started in 2020 when I began to 
        learn <span class='accented'>python</span>, and continued in 2021 when I 
        began to learn full-stack development - specifically, using <span class='accented'>React.js</span>
        &nbsp;and <span class='accented'>Node.js</span> to create full-fledged user experiences.
        <br/><br/>
        Now, I'm moving towards learning about <span class='accented'>AI, mobile development,</span> 
        &nbsp;and expanding my knowledge to other programming languages.
        </p>
        <img className='photo' src={photo}/>
      </div>
    </aboutme>
  );
}