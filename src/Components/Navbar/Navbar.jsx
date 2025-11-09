import React, { useContext, useState } from 'react'
import"./Navbar.css"
import logo from'../assets/logo.png'
import cart_icon from '../assets/cart_icon.png'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'

const Navbar = () => {
    let [menu,setMenu]=useState("shop")
    let {getToCartCount}=useContext(ShopContext);
  return (
    <div className='navbar'>
        <div className="nav-logo">
            <img src={logo} alt="" />
            <p>ShooPY</p>
        </div>
        <ul className='nav-links'>
            <li onClick={()=>{setMenu("shop")}}><Link style={{textDecoration:"none"}} to={"/shop"}>Shop</Link> {menu==="shop" ? <hr/> : <></>} </li>
            <li onClick={()=>{setMenu("men")}}><Link style={{textDecoration:"none"}} to={"/men"}>Men</Link> {menu==="men" ? <hr/> : <></>} </li>
            <li onClick={()=>{setMenu("women")}}><Link style={{textDecoration:"none"}} to={"/women"}>Women</Link> {menu==="women" ? <hr/> : <></>} </li>
            <li onClick={()=>{setMenu("kid")}}><Link style={{textDecoration:"none"}} to={"/kid"}>Kids</Link>{menu==="kid" ? <hr/> : <></>} </li>
        </ul>
        <div className='nav-cart-icon'>
            <Link style={{textDecoration:"none"}} to={"/"}>  <button>Login</button></Link>
            <Link style={{textDecoration:"none"}} to={"/Cart"}> <img src={cart_icon} alt="" /> </Link>
            <div className="nav-cart-count">{getToCartCount()}</div>
        </div>

    </div>
  )
}

export default Navbar;