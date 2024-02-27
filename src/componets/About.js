import React from 'react';
import background from '../images/join-us.jpg';


export default function About() {
  return (
    <>
    <div className='about'>
      <div className='accordion-title'>
      <h1 className="my-2">About Us</h1>
      </div>
      <div className="accordion" id="accordionExample">
        <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
          <div className="accordion-body">
          Introducing <strong>Skater Republic</strong>, the thrilling upcoming arcade game that puts you right in the heart of a dynamic skateboarding adventure! Explore expansive skateparks, bustling cityscapes, and renowned real-life locations for an immersive experience like no other. Featuring intuitive controls, a sophisticated trick system, and a compelling progression framework, players will find themselves immersed in a world where every achievement feels truly gratifying. Keep an eye out as we work diligently to bring this extraordinary gaming experience to life.
        </div>
      </div>
      <img src={background} alt="background" className='images'/>
    </div>
  </div>
  </>
  )
}
