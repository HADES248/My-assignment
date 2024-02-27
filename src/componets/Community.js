import React from 'react';
import background from '../images/join-us.jpg';

export default function Community() {
  return (
    <>
      <div className="container-community">
        <h1>Join Us Now!!</h1>
        <button type="button" class="btn btn-danger">Join Us</button>
        <p>join our discord server</p>
        <div className='main-community' >
        <img src={background} className='images' alt='background'/>
        </div>
      </div>
    </>
  )
}
