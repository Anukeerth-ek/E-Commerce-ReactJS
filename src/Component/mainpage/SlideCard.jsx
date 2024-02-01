import React from 'react'
import SData from './SData' 
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick"
import MainBanner from './MainBanner' 


function SlideCard() {
 
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      // appendDots: (dots)=> {
      //   return <ul style = {{margin: "0px"}}></ul>
      // }
    }
  


  return (
    <>
     <Slider {...settings}>                 {/*  <=___THIS SLIDER IS NOT OUR COMPONENT... IT'S FOR SLIDING___________________   */}
      {SData.map((items, index)=> {
        return(
          <>

        <div className='box d_flex top  new'key={index}>
          <div className='left'>
            <h1>{items.title}</h1>
            <p>{items.desc} </p>
            {/* <button className='btn-primary'>Visit us</button> */}
          </div>

          <div className='right'>
            <img src={items.cover}/>
          </div>
          </div>

          <div className='banner-image-container'>
        {MainBanner.map((items, index)=> {
          return(
            <div className='banner'>
            <img src={items.img} className='banner'/>
            </div>
          )
          
        })}
        </div>
      
         </>
        )
      })}
                    
   </Slider>
    </>
  )
  
}

export default SlideCard


