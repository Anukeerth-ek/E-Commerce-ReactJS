import React from 'react'
import Dcard from './Dcard'
function Discount() {
  return (
    <>
    <section className='Discount background newarrivals picked-product'>
        <div className='container'>
          <div className='heading d_flex'>
            <div className='heading-left row f_flex'>
              <img src='https://img.icons8.com/windows/32/fa314a/gift.png' />
              <h2>Up to 75% Off: Bestselling Smartwatches</h2>
            </div>
            <div className='heading-right row '>
              <span>View all</span>
              <i className='fa-solid fa-caret-right'></i>
            </div>
          </div>
          <Dcard />
        </div>
      </section>
    </>
  )
}

export default Discount