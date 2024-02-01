
import React from 'react'
import Ndata from './Ndata'
import Slider from "react-slick";
import './style.css'
function Cart() {
  // const settings = {
  //   dots: false,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 6,
  //   slidesToScroll: 1,
  //   autoplay: true,
  // };
  return (
    <>
     {/* <Slider {...settings}> */}
    <div className='content'>
      {Ndata.map((val, index) => {
        return (
          <div className='newBox' key={index}>
            <div className='new-img'>
              <img src={val.cover} alt='' />
            </div>
            <h4>{val.name}</h4>
           
            <span className='new-price'>${val.price}</span>
            
              </div>
          
          
        )
      })}
    </div>
    {/* </Slider> */}
  </>
  )
}

export default Cart