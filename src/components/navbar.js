import React, { useState, useEffect } from 'react';
import '../assets/css/navbar.scss';
import logo from '../assets/images/logo.png';
import hamburger from '../assets/images/Hamburger.png';

function Navbar() {

  const [isVisible, setIsVisible] = useState(false);
  

  function menu (e) {
    console.log("in!"); 
    setIsVisible(!isVisible);
    console.log(isVisible);
    
  }

  useEffect(() => {
    console.log("isVisible", isVisible);
  }, [isVisible]);

  console.log("isVisible", isVisible, setIsVisible);

  return (
      <header className='navbar'>
          <div className='navbar__title navbar__item'><a><img src={logo}/></a></div>
          <div className='navbar__item pc'><a href='#aboutme'>About Me</a></div>
          <div className='navbar__item pc'><a href='#experience'>Experience</a></div>
          <div className='navbar__item pc'><a href='#projects'>Projects</a></div>    
          <div className='navbar__item pc'><a href='#skills'>Skills</a></div>    
          <div className='navbar__item pc'><a href='#contact'>Contact me</a></div>        
          <button className='navbar__item navbar__hamburger mb' onClick={menu}><img src={hamburger}/></button>
          {(isVisible) ? (
            <div id="myNav" class="overlay">
              <button class="closebtn" onClick={menu}>&times;</button>
              <div class="overlay-content">
              <a href='#aboutme' onClick={menu}>About Me</a>
              <a href='#experience' onClick={menu}>Experience</a>
              <a href='#projects' onClick={menu}>Projects</a>
              <a href='#skills' onClick={menu}>Skills</a>
              <a href='#contact' onClick={menu}>Contact me</a>
              </div>
            </div>
          ) : (
            <div></div>
          )
          }
      </header>
  ); 
}

export default Navbar;
