import React, { useState } from 'react'
import Slider from "react-slick";
// import { useCart } from '../../CartContext';
import { useCart } from '../../ContextApi/CartContext';

import AlertBox from '../Alert/Alert';
import './greatoff.css'

// SETTING THE FUNCTION FOR SLIDER
const NextArrow = (props)=> {
    
    const{onClick} = props
    return(
        <div className='control-btn' onClick={onClick}>
            <button className='next'>
                <i className='fa fa-long-arrow-alt-left'></i>
            </button>
        </div>
    )
}

// SETTING THE FUNCTION FOR SLIDER
    const PrevArrow = (props)=> {
    const{onClick} = props
    return(
        <div className='control-btn' onClick={onClick}>
            <button className='prev'>
                <i className='fa fa-long-arrow-alt-right'></i>
            </button>
        </div>
    )
}



// COMPONENT
function FlashCard({productItems, addToCart, loginChecker}) {

    
// CHANGING BUTTON TEXT AFTER USER CLICK ON IT 
    const [addedToCart, setAddedToCart] = useState(productItems.map(() => false));

    const  handleAddToCart = (index)=> {
      
       
        addToCart(productItems[index])
        // setCartIconClass(true)

        const newAddedToCart = [...addedToCart]
        newAddedToCart[index] = true
        setAddedToCart(newAddedToCart);
       
    }

  

// CHANGE CLASS FOR FAVOURITE ICON
    let [changeColor, setChangeColor] = useState(null)
    const incrementHandler = (index)=> {
         if(changeColor === index) {
            return setChangeColor(null)
         }
          setChangeColor(index)
    }
    // const classChanger = changeColor ? 'fa-solid fa-heart' : 'fa-regular fa-heart' ;

    // THIS IS IMAGE SLIDER SETTINGS
    const settings = {
        dots: false,
        infinite: true,
        speed: 700,
        slidesToShow: 4,
        slidesToScroll: 2,
        autoplay: true
        // nextArrow: <NextArrow/>,
        // prevArrow: <PrevArrow/>
      };

    // LETS DISPLAY ALERT POPUP
    const [showPopup, setShowPopup] = useState(false)
    const displayPopup = ()=> {
       setShowPopup(true)
 
    }      

    //  _________RETURN___________
  return (
    <>
     <Slider {...settings}>
        {productItems.map((productItems, index)=> {
          
       
        return( <div className='box' key = {productItems.id}> 
            <div className='product newcls mtop'>
                <div className='img'>
                <span className='discount'>{productItems.discount} %off</span>
                <div className='img-container'>
                <img src={productItems.cover} className='product-img'/>
                </div>
                </div>
                <div className='product-like'>
                    {/* <label>{count}</label> <br/> */}
                    <i className= {changeColor == index ? "fa-solid fa-heart opacity" : "fa-regular fa-heart no-opacity"   } onClick={()=> {
                        incrementHandler(index)
                    }}></i>
                </div>
                

                <div className='product-detail'>
                    <h3 className='product-name'>{productItems.name}</h3>
                    <div className='rate'>
                        <i className='fa fa-star'></i>
                        <i className='fa fa-star'></i>
                        <i className='fa fa-star'></i>
                        <i className='fa fa-star'></i>
                        <i className='fa fa-star'></i>
                    </div>
                <div className='price'>
                    <h4>$ {productItems.price}.00</h4>
                   

                    <i class= {addedToCart[index] ? 'not-active' : 'fa-solid fa-cart-shopping' }></i>             
                    <button className= {addedToCart[index] ?  "visible" : ""}   onClick={()=>  loginChecker ? handleAddToCart( index ) : displayPopup()}  >
                  
                    {addedToCart[index] ? 'Carted' : 'Order now'}
                    </button>
                 
                </div>

                </div>
            </div>
            <alert/>
        </div>
        )
    
        })} 
        </Slider>
        <AlertBox showPopup = {showPopup} setShowPopup={setShowPopup}/>
    </>
    
  )
}

export default FlashCard