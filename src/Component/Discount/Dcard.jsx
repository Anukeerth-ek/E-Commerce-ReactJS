import React from 'react'
import Ddata from './Ddata'
import Slider from "react-slick";
function Dcard() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
      };
  return (
    <>
    <Slider {...settings}>
     
        {Ddata.map((value, index)=> {
            return(
                <>
                <div className=' product scale-div' key={index}>    
                   <div className='box'> 
                      <div className='img'>
                        <img src={value.cover} />
                       </div>
                          <h4>{value.name} </h4>
                          <div className='price-div'>
                          <span>{value.price} </span>
                          <span>{value.oldPrice}</span>
                          </div>
                    </div>    
                    
                </div>
                </>
            )
        })}
 
    </Slider>
    </>
  )
}

export default Dcard