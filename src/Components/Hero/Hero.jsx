import React from 'react'
import hand_icon from "../assets/hand_icon.png"
import arrow_icon from "../assets/arrow.png"
import hero_image from "../assets/hero_image.png"
import './Hero.css'

const Hero = () => {
  return (
    <div className='hero'>
        <div className="Hero-left">
            <h2>New Arrivals Only...</h2>
            <div>
                <div className="Hero-hand-icon">
                    <p>New</p>
                    <img src={hand_icon} alt="" />
                </div>
                <p>Collection</p>
                <p>For Everyone</p>
            </div>
            <div className='hero-letest-btn'>
                <div>Latest Collection</div>
                <img src={arrow_icon} alt="" />
            </div>
        </div>
        <div className="Hero-right">
            <img src={hero_image} alt="" />
        </div>

    </div>
  )
}

export default Hero