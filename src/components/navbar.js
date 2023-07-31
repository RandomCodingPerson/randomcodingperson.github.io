import React from "react";
import '../assets/css/navbar.scss'

function Navbar() {
  return (
      <header className='navbar'>
          <div className='navbar__title navbar__item'><a>Vibhuv Sharma</a></div>
          <div className='navbar__item'><a href='#aboutme'>About Me</a></div>
          <div className='navbar__item'><a href='#experience'>Experience</a></div>
          <div className='navbar__item'><a href='#skills'>Skills</a></div>    
          <div className='navbar__item'><a href='#contact'>Contact me</a></div>        
      </header>
  ); 
}

export default Navbar;
