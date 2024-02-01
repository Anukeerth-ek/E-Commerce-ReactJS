import React, { useState } from 'react'
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import logo from '../assets/images/logo.jpeg'
import { useLocation } from 'react-router-dom'
import Search from './Search'

function Navbar({cartItem}) {

 const [MobileMenu, setMobileMenu] = useState(false)

 const [navbar, setNavbar] = useState(true)

 const changeNavbar = ()=> {
     if(window.scrollY >= 74) 
       setNavbar(false)
        else 
          setNavbar(true)
 }

 window.addEventListener("scroll", changeNavbar)


  return (
    <>
        <header className='header'>
            <div className='container d_flex'>
            <div className={navbar ? 'logo-width': 'transform-navbar'}>
               <h3>ShopEase</h3>  
                     

           </div>
               <div className='navbar-input-container'>
                {/* <i className='fa fa-search'></i> */}
                <input type="text" placeholder="What's on your mind..." className='navbar-input'/>
                <span>Search</span>
            </div>

                <div className='navlink'>
                <ul className={MobileMenu ? 'nav-links-MobileMenu': "link f_flex capitalize"} onClick={()=> setMobileMenu(false)}>
                         <li className='common-nav'> <Link to = "E-commerce-React-App/">Home</Link></li>          
                         <li className='common-nav'> <Link to = "/about">About</Link></li>
                         <li className='common-nav'> <Link to="/cart">Checkout</Link></li>
                         <li className='common-nav'> <Link to="/cart/myorders">My Orders</Link></li>
                         <li className='common-nav'> <Link to="/signup">Login</Link></li>       {/* NEED TO INSERT 'LINK HERE' */}

                         
                        
                </ul>

                    <button className='toggle' onClick={()=> setMobileMenu(!MobileMenu)}>
                        {
                            MobileMenu? 
                            <i className="fa-solid fa-xmark close home-btn"></i> : 
                            <i className='fa fa-bars open'></i>
                        }
                    </button>
                </div>
            </div>
        </header>
    </>
  )
}

export default Navbar