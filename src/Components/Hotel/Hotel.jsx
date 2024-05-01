import React from 'react'
import './Hotel.css'
import hotel1 from '../../assets/hotel1.jpg'
import hotel2 from '../../assets/hotel2.jpg'
import hotel3 from '../../assets/hotel3.jpg'
import hotel4 from '../../assets/hotel4.jpg'
import whiteArrow from '../../assets/whiteArrow.png'


const Hotel = () => {
  return (
    <div className='hotel'>
      <div className="gallery">
        <img src={hotel1} alt="" />
        <img src={hotel2} alt="" />
        <img src={hotel3} alt="" />
        <img src={hotel4} alt="" />
      </div>
      <button className='btn'>See more here <img src={whiteArrow} alt="" /></button>
     
    </div>
  )
}

export default Hotel
