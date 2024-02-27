import React from 'react'
import image from '../images/join-us.jpg';

export default function Purchase() {
  return (
    <>
    <div className='everything'>
      <div className='main-buy'>
        <div>
        <h1>Buy an Early Copy & Take part in the adventure</h1>
        <button type="button" class="btn btn-danger">Buy Now!!</button>
        </div>
      
      </div>
      <div className="container-buy">
        <img src={image} className='images' alt="title" />
      </div>
    </div>
    </>
  )
}
