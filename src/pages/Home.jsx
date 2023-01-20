import React, { useState } from 'react';
import img from '../assets/image/home-background.jpg'
import Featured from "../components/Featured";
import Navbar from '../components/Navbar'
const home = (props) => {

  return (
    <div>
      <Navbar/>
        <section className="home-section">
        <img src={img} alt=""/>
        <div className="bacground-black"></div>
        <div className="welcome-section">
            <h1>WELCOME TO CAR CMART</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit consectetur adipisicing elit</p>
            <a href="#Featured" className="read-btn nav-link">READ MORE</a>
        </div>

      </section>
      <div id='Featured' className=''>
      <Featured  cars={props.cars.slice(0,8)}/>
      </div>
    </div>
  )
}

export default home