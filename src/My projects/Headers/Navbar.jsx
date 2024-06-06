import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import logo from "../assets/images/logo.jpeg";
import { useLocation } from "react-router-dom";
import Search from "./Search";
import { useAuth0 } from "@auth0/auth0-react";
import { CiSearch } from "react-icons/ci";
import { CiMenuFries } from "react-icons/ci";

function Navbar({ cartItem }) {
     // THIS IS FOR AUTHENTICATION
     const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();

     const [MobileMenu, setMobileMenu] = useState(false);

     const [navbar, setNavbar] = useState(true);

     const changeNavbar = () => {
          if (window.scrollY >= 74) setNavbar(false);
          else setNavbar(true);
     };

     window.addEventListener("scroll", changeNavbar);

     return (
          <>
               <header className="header sticky-class">
                    <div className="container d_flex">
                         <div className={navbar ? "logo-width" : "transform-navbar"}>
                              <h3>GlimpseShope</h3>
                         </div>
                         <div className="navbar-input-container">
                              {/* <i className='fa fa-search'></i> */}
                              <input type="text" placeholder="What's on your mind..." className="navbar-input" />

                              <span>Search</span>
                         </div>


                         <div className="cart show-cart hide-cart">
                              <Link to="/cart">
                                   <i class="fa-solid fa-cart-shopping   icon-circle" title="Cart">
                                        {" "}
                                   </i>

                                   <span>{cartItem.length === 0 ? "" : cartItem.length}</span>
                              </Link>
                         </div>


                         <div className="navlink">
                              <ul
                                   className={MobileMenu ? "nav-links-MobileMenu" : "link f_flex capitalize"}
                                   onClick={() => setMobileMenu(false)}
                              >
                                   {MobileMenu && <i className="fa-solid fa-xmark "></i>}
                                   <li className="common-nav home-nav">
                                        {" "}
                                        <Link to="/">Home</Link>
                                   </li>
                                   <li className="common-nav">
                                        {" "}
                                        <Link to="/about">About</Link>
                                   </li>

                                   <li className="common-nav unauth-route capitalize">
                                        Checkout
                                        {isAuthenticated && <Link to="/cart">CHECKOUT </Link>}
                                   </li>

                                   <li className="common-nav unauth-route capitalize">
                                        My orders
                                        {isAuthenticated && <Link to="/cart/myorders">MY ORDERS</Link>}
                                   </li>

                                   {isAuthenticated ? (
                                        <li className="login-btn">
                                             <button
                                                  onClick={() =>
                                                       logout({ logoutParams: { returnTo: window.location.origin } })
                                                  }
                                                  className="login-btn"
                                             >
                                                  Logout
                                             </button>
                                        </li>
                                   ) : (
                                        <li className="common-nav login-btn">
                                             <button onClick={() => loginWithRedirect()} className="login-btn">
                                                  Login
                                             </button>
                                        </li>
                                   )}
                              </ul>

                              <button className="toggle" onClick={() => setMobileMenu(!MobileMenu)}>
                                   {MobileMenu ? <i className=" close home-btn"></i> : <i className="fa fa-bars open "></i>}
                              </button>
                         </div>
                    </div>
               </header>
          </>
     );
}

export default Navbar;
