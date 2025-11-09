import React from 'react'
import arrow_icon from '../assets/arrow.png'
import './Breadcrum.css'

const 
Breadcrum = (props) => {
    let {product}=props;

  return (
    <div className='breadcrum'>
        Home <img src={arrow_icon} alt="" />
        Shop <img src={arrow_icon} alt="" />
        {product.category} <img src={arrow_icon} alt="" />
        {product.name}

    </div>
  )
}

export default Breadcrum;