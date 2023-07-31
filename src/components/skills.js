import React from "react";
import '../assets/css/skills.scss'
import ReactIMG from "../assets/images/react.png";
import SailsIMG from "../assets/images/sails.png";
import PostgreIMG from "../assets/images/postgresql.jpg";
import MongoIMG from "../assets/images/mongodb.png";
import JsIMG from "../assets/images/javascript.png";
import FirebaseIMG from "../assets/images/firebase.png";
import NodeIMG from "../assets/images/nodejs.png";
import GithubIMG from "../assets/images/github.png";
import FigmaIMG from "../assets/images/figma.jpg";

export default function App() {
  return (
    <skills>
        <h2>Skills</h2><div className='hr'></div>
        <div class='skillsContainer'>
          <div class='skillBox'>
            <img src={ReactIMG}></img>
            <div>
              <h4>React</h4>
              <p>3 years</p>
            </div>
          </div>
          <div class='skillBox'>
            <img src={SailsIMG}></img>
            <div>
              <h4>Sails.js</h4>
              <p>3 years</p>
            </div>
          </div>
          <div class='skillBox'>
            <img src={PostgreIMG}></img>
            <div>
              <h4>PostgreSQL</h4>
              <p>3 years</p>
            </div>
          </div>
          <div class='skillBox'>
            <img src={MongoIMG}></img>
            <div>
              <h4>MongoDB</h4>
              <p>1 year</p>
            </div>
          </div>
          <div class='skillBox'>
            <img src={JsIMG}></img>
            <div>
              <h4>JavaScript</h4>
              <p>4 years</p>
            </div>
          </div>
          <div class='skillBox'>
            <img src={FirebaseIMG}></img>
            <div>
              <h4>Firebase</h4>
              <p>3 years</p>
            </div>
          </div>
          <div class='skillBox'>
            <img src={NodeIMG}></img>
            <div>
              <h4>Node.js</h4>
              <p>4 years</p>
            </div>
          </div>
          <div class='skillBox'>
            <img src={GithubIMG}></img>
            <div>
              <h4>Github</h4>
              <p>3 years</p>
            </div>
          </div>
          <div class='skillBox'>
            <img src={FigmaIMG}></img>
            <div>
              <h4>Figma</h4>
              <p>2 years</p>
            </div>
          </div>
        </div>
    </skills>
  );
}