import React from "react"
import "./style.css"
import { useState } from "react"

import Payment from './Payment'
import { useNavigate } from "react-router-dom";

const Cart = ({  cartItem, addToCart, decreaseQty, loginState, totalPrice,  discount, lastTotalAmount}) => {
 console.log("ds", lastTotalAmount)

    // FOR RAZOR PAYMENT
    // const [amount, setAmount] = useState('')
    // const handlePayment = (e)=> {
    //     e.preventDefault();
    //     if(amount === '') {
    //         alert("Invalid entry")
    //     }
    //     else {
    //       amount = totalPrice
    //     }
    // }

    const navigate = useNavigate()
    // IMPLEMENTING SHOWORDER PAGE
    const[showOrderPg, setShowOrderpg] = useState(false)
    const orderPageDisplayer = ()=> {
  
      setShowOrderpg(true)
      navigate('/cart/myorders')
     
    }
      // CHECK ENTERED COUPON CODE IS CORRECT OR NOT
      const [couponChecker, setCouponChecker] = useState(false)
      const couponHandler = (event)=> {
        if(event.target.value === loginState + "25off") {
          setCouponChecker(true)
        }
      }
      
      const [applyCoupon ,setApplyCoupon] = useState(false)
      const couponCorrectChecker = ()=> {
        // if(couponChecker) {
          setApplyCoupon(true)
        // }
    
      }
     

  return (
    <>
    {showOrderPg && <Payment totalPrice= {totalPrice} discount={discount} lastTotalAmount={lastTotalAmount} loginState={loginState}/> }
      <section className="cart-items">
        {cartItem.length > 0 && 
        <div className="cart-product-header container ">
            <h3 className="product-name">product</h3>
            <div className="d_flex">

            <h3>Price</h3>
            <h3>Quantity</h3>
            <h3>Product Total price</h3>
            </div>
        </div>
}
        <div className='container d_flex'>
       

          <div className='cart-details'>
            {cartItem.length === 0 && <h1 className='no-items '>No Items are add in Cart</h1>}
            

            {cartItem.map((item) => {
                  const price = Math.floor(item.price);
                  const qty = Math.floor(item.qty);

              const productQty = price * qty

            
            
              return (
                <div className='cart-list  d_flex' key={item.id}>
                  <div className='img'>
                    <img src={item.cover} alt='' />
                  </div>
                  <div className='cart-content-details  '>
                    <h3>{item.name}</h3>
                    
                    <div className="payment-flex">
                        <h4 className="price"> $ {item.price}.00  </h4>
                     
                    <div className='cartControl d_flex'>
                    <button className='desCart' onClick={() => decreaseQty(item)}>
                        <i className='fa-solid fa-minus'></i>
                      </button>
                      <h4 className="quantity">{item.qty}</h4>
                     

                      <button className='incCart' onClick={() => addToCart(item)}>
                        <i className='fa-solid fa-plus'></i>
                      </button>
                    </div>
                    
                    <h4 className="total-price">${productQty}.00</h4>

                    </div>

                  </div>
                  <div className='cart-items-function'>
                    {/* <div className='removeCart'>
                      <button className='removeCart'>
                        <i className='fa-solid fa-xmark'></i>
                      </button>
                    </div> */}
        
                   
                  </div>

                  <div className='cart-item-price'></div>
                </div>
              )
            })}
          </div>
            
       {/* ______________________________ */}
      
      {/* ______________________________ */}
          <div className="payment-position">
            
           {showOrderPg &&  <div className="coupon-div-container">

           <div className="coupon-div">

              <input type="text" placeholder="Coupon Code" onChange={couponHandler}/>
              <button onClick={couponCorrectChecker}>Apply Coupon</button>

            </div>
            <div className="coupon-div-border">

            <h5 className="offer">save $25</h5>
            <h3> Your code <span className="off">{loginState + '25off'}</span></h3>
            
            <h5>For purchase of mininum <span>$100</span></h5>
            <h5>10/ 02/ 2024</h5>
            </div>
            </div> }
       {/*  */}

            <div className='cart-total '>





            <div>
            <h2>Payments Section</h2>
            <div >

              <div className=' d_flex payment-section-margin'>
              <h4>Total Price :</h4>
              <h3>${totalPrice}</h3>
              </div>

              <div className=' d_flex payment-section-margin'>
               <h4>Shipping</h4>
               <h3>$5</h3>
              </div>

              <div className=' d_flex payment-section-margin'>
               <h4>Discount</h4>
               <h3>{applyCoupon ? "$" +discount: '$0'}</h3>
              </div>
              <div className=' d_flex '>
               <h4>Total</h4>
               <h3>${lastTotalAmount}</h3>
              </div>

            </div>
            </div>

        {cartItem.length > 0 && <div className="checkout-btn">

            <button onClick={orderPageDisplayer}>Checkout <i class="fa-solid fa-arrow-right"></i></button>
            
            </div>}  
            
          </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Cart



