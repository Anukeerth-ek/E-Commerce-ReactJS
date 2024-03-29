import React from 'react'
import Cart from './Cart'
import './style.css'
function NewArrivals() {
  return (
    <>
      <section className='NewArrivals background picked-product '>
        <div className='container'>
          <div className='heading d_flex'>
            <div className='heading-left row  f_flex'>
            <img width="100" height="100" src="https://img.icons8.com/ios-filled/100/FA5252/new.png" alt="new"/>
              <h2>New Arrivals </h2>
            </div>
            <div className='heading-right row '>
              <span>View all</span>
              <i className='fa-solid fa-caret-right'></i>
            </div>
          </div>

          <Cart />
        </div>
      </section>
    </>
  )
}

export default NewArrivals