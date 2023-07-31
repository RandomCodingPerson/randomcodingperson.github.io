import React from "react";
import photo from "../assets/images/vibhuvsharma.png"
import '../assets/css/aboutme.scss'

export default function App() {
  return (
    <aboutme>
      <div>
        <h2>About me</h2> <div className='hr'></div>
      </div>
      <div className='flex'>
        <p className='halfScreen'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin fermentum in est nec accumsan. Duis commodo nulla quis arcu elementum rhoncus. Nunc justo lectus, posuere eu rhoncus quis, blandit ullamcorper est. Duis id molestie quam, vel laoreet lorem. Mauris euismod libero nec ipsum aliquet tincidunt. Pellentesque eros massa, pharetra sagittis hendrerit ultrices, auctor id dui. Suspendisse id pretium neque, ut mollis diam. Sed eleifend urna ligula, vel bibendum nulla convallis ut. Morbi sollicitudin consequat ultrices. Donec feugiat est ante, sit amet luctus odio porttitor quis. Sed ipsum magna, sollicitudin et velit sed, aliquam aliquam massa.
        </p>
        <img className='photo' src={photo}/>
      </div>
    </aboutme>
  );
}