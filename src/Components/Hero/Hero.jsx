import React from 'react';
import './Hero.css';
import darkArrow from '../../assets/darkArrow.png';

const Hero = () => {
  return (
    <div className='hero container'>
      <div className='hero-text'>
        <h1>Unmatched Luxury Awaits</h1>
        <p>Experience the pinnacle of luxury at Kadoma Hotel and 
            Conference Center, offering opulent accommodations and
             top-notch amenities. Immerse yourself in comfort and
              refinement, ensuring an unforgettable stay 
            in Kadoma.</p>
            <button className='btn'>Explore more <img src={darkArrow} alt="" /></button>
      </div>
    </div>
  )
}

export default Hero
