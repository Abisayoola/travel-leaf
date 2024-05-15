import React from 'react'
import './Featured.css'
import rectangle from '../../assets/Image Block.png'
import image from '../../assets/image2.png'
import imagee from '../../assets/Image3.png'

const Featured = () => {
  return (
    <div>
      <div className='fcText'>
      <div className='featuredContainer'>
        <h1>Your Dream Getaway Awaits You</h1>
        <p>Discover a World of Comfort and Style - Explore Our Handpicked Selection of Available Houses for Your Next Stay.</p>
      </div>
      <button className='featuredButton'>View All</button>
      </div>
    <div className='featured'>
        <div className='featuredItem'>          
            <img alt='' src={rectangle} className='featuredImg'/>
            <div className='featuredTitle'>
             <h1> Houston Texas</h1>
             <p>Rochester</p>
            </div> 
        </div>
        <div className='featuredItem'>
            <img alt='' src={image} className='featuredImg'/>
            <div className='featuredTitle'>
             <h1> Houston Texas</h1>
             <p>Rochester</p>
            </div> 
        </div>
        <div className='featuredItem'>
            <img alt='' src={imagee} className='featuredImg'/>
            <div className='featuredTitle'>
             <h1> Houston Texas</h1>
             <p>Rochester</p>
            </div> 
        </div>
      </div>
      </div>
  )
}

export default Featured
