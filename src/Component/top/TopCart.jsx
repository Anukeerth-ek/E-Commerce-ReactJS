import React from 'react'
import Tdata from './Tdata'
import Slider from "react-slick";


function TopCart() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
      };
  return (
   <>
    <Slider {...settings}>
   { Tdata.map((value, index)=> {
        return(
           <>
            <div className='box product  responsive' key = {index}>
                <div className='nametop d_flex'>
                    <span className='tleft'>{value.para}</span>
                    <span className='tright'>{value.desc}</span>
                </div>
                <div className=' picked-img'>
                    <img src={value.cover}/>
                </div>
                <button className='order-btn'>View Now</button>
            </div>
            </>
        )    
    }) }
    </Slider>
   </>
  )
}

export default TopCart;