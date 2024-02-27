import React from 'react';
import trailer from '../background-vid/trailer.mp4';
export default function Home() {
  return (
    <>
    <div className='main'>
      <video className='videoTag' src={trailer} autoPlay loop muted>
      </video>
      <div className="container">
        <h1>Welcome to Skater Republic!!</h1>
        <p>Experience The True Thrill</p>
      </div>
    </div>
    </>
  )
}
