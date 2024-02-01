import React from 'react'
import { useNavigate } from 'react-router-dom'

const OrderPlaced = () => {
  
  // LETS REDIRECT TO HOMEPAGE
  const navigate = useNavigate()

  const handleRedirectHome = ()=> {
        navigate('/')
      
  }
  return (
    <div className='orderPlacedComponent'>
      <div className='order-placed-wrapper'>

     
      <img src='https://thumb9.shutterstock.com/mosaic_250/169597876/569987260/stock-vector-vector-illustration-of-tick-icon-in-blue-569987260.jpg'/>
        <h3>Thank you for ordering!!!</h3>
        
        <div className='order-definition'>

        <p className='dispatch-detail'>Your order will be dispatched tomorrow, Without any further delay. Keep shopping!! </p>
        <p>For any enquiry mail us:  <span>shopease@gmail.com</span></p>
       
        <div className='order-placed-button'>
          <button>Feedback</button>
          <button onClick={handleRedirectHome}>Continue Shopping</button>
        </div>
        </div>
        </div>
    </div>

  )
}

export default OrderPlaced