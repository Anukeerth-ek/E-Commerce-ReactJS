
import React, { useState } from 'react'

// COMPONENT
function ShopCart({shopItems, addToCart}) {

    let [count, setCount] = useState(0)

    const incrementHandler = ()=> {
        setCount(count + 1)
        console.log('count is', count)
    }

    //  _________RETURN___________
  return (
    <>
    {shopItems.map((shopItems, index) => {
      return (
        <div className='box'>
          <div className='product mtop padding-shopCart '>
            <div className='img shop-img'>
              <span className='discount'>{shopItems.discount} Off</span>
              <img src={shopItems.cover} alt='' />
              <div className='product-like'>
                {/* <label>{count}</label> <br /> */}
                <i className='fa-regular fa-heart' onClick={incrementHandler}></i>
              </div>
            </div>
            <div className='product-details'>
              <h3>{shopItems.name}</h3>
              <div className='rate'>
                <i className='fa fa-star'></i>
                <i className='fa fa-star'></i>
                <i className='fa fa-star'></i>
                <i className='fa fa-star'></i>
                <i className='fa fa-star'></i>
              </div>
              <div className='price'>
                <h4>${shopItems.price}.00 </h4>
             
                <button onClick={() => addToCart(shopItems)}>
                  <i className='fa fa-plus'></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      )
    })}
  </>
    
  )
}

export default ShopCart