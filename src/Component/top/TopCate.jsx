import React from 'react'
import TopCart from './TopCart'
import "./topStyle.css"

function TopCate() {
  return (
    <>
    <section className='TopCate background'>
      <div className='container'>
        <div className='heading d_flex'>
          <div className='heading-left row  f_flex'>
          <i class="fa-regular fa-heart"></i>
            <h2>Most Picked</h2>
          </div>
          <div className='heading-right row '>
            <span>View all</span>
            <i className='fa-solid fa-caret-right'></i>
          </div>
        </div>
        <TopCart />
      </div>
    </section>
  </>
  )
}

export default TopCate