import React, { useRef, useState } from 'react';

import Hero from '../components/hero.js';
import Navbar from '../components/navbar.js';
import Cursor from '../components/cursor.js';
import AboutMe from '../components/aboutMe.js';
import Experience from '../components/experience.js';
import Projects from '../components/projects.js';
import Skills from '../components/skills.js';
import Footer from '../components/footer.js';

import '../assets/css/App.scss';

/*
import '../assets/css/swiper.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Mousewheel, Pagination } from 'swiper/modules';*/

function App() {
  
  return (
    <div>
      <Cursor/>
      <Navbar/>
      <Hero/>
      <div id='aboutme' className='scrollTo'></div>
      <AboutMe/>
      <div id='experience' className='scrollTo'></div>
      <Experience/>
      <div id='projects' className='scrollTo'></div>
      <Projects/>
      <div id='skills' className='scrollTo'></div>
      <Skills/>
      <div id='contact' className='scrollTo'></div>
      <Footer/>
    </div>
  );
}

export default App;

/*

import React, { useRef, useState } from 'react';

import Hero from '../components/hero.js';
import Navbar from '../components/navbar.js';
import Cursor from '../components/cursor.js';
import AboutMe from '../components/aboutMe.js';
import Experience1 from '../components/experience/experience1.js';
import Experience2 from '../components/experience/experience2.js';
import Experience3 from '../components/experience/experience3.js';
import Skills from '../components/skills.js';
import Fps1 from '../components/fps1.js';
import '../assets/css/App.scss';

// Import Swiper React components
import SwiperCore, { Scrollbar } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import '../assets/css/swiper.scss';

// import required modules
import { Mousewheel, Pagination } from 'swiper/modules';

export default function App() {
  return (
    <>
    <div class="swiper-scrollbar" style={{opacity: 0, transition: "all 400ms ease 0s"}}><div className="swiper-scrollbar-drag" style={{transform: "translate3d(751.8px, 0px, 0px)", transition: "all 0ms ease 0s", width: 107.4}}></div></div>
    <Navbar/>
    <Cursor/>
      <Swiper
        direction={'vertical'}
        slidesPerView={1}
        spaceBetween={0}
        mousewheel={true}
        pagination={{
          clickable: true,
        }}
        modules={[Mousewheel, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><Hero/></SwiperSlide>
        <SwiperSlide><AboutMe/></SwiperSlide>
        <SwiperSlide><Experience1/></SwiperSlide>
        <SwiperSlide><Experience2/></SwiperSlide>
        <SwiperSlide><Experience3/></SwiperSlide>
      </Swiper>
    </>
  );
}
*/