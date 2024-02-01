import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'


function Search({cartItem}) {

    
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
       <section className='search'>
        <div className='container c_flex padding-search'>
              
            {/* <div className='categories d_flex'>
                    <span className='fa-solid fa-border-all'></span>
                    <h4>Categories<i className='fa fa-chevron-down'></i></h4>
                </div> */}
             
           <div className='categories d_flex hover-class'>
                    

                  
                 

                    <ul className={navbar ? 'show-category-item-search' :"hide-category-item-search"}>
                        <li>Laptops</li>
                        <li>Mobiles</li>
                        <li>Earpods</li>
                        <li>Books</li>
                        <li>KidsWear</li>
                        <li>WomensWear</li>
                        <li>GentsWear</li>
                        <li>Headsets</li>
                        <li>Toys</li>
                        <li>Watches</li>
                        <li>Sports</li>
                     
                    </ul>
                    
                </div>


            <div className={navbar ? 'hide-search-box' : 'search-box f_flex'}>
                <i className='fa fa-search'></i>
                <input type="text" placeholder="What's on your mind..."/>
                <span>Search</span>
            </div>



            <div className='icon f_flex width'>
            <i class="fa-solid fa-location-dot icon-circle"></i>
            <i class="fa-solid fa-bell icon-circle"></i>
            <i class="fa-solid fa-heart  icon-circle"></i>
                <div className="cart">
                <Link to="/cart">
                <i class="fa-solid fa-cart-shopping   icon-circle" title='Cart'> </i>
                  
                    <span>{cartItem.length === 0 ? "" : cartItem.length}</span>
                    </Link>
                </div>
            </div>
        </div>
       </section>
    </>
  )
}

export default Search