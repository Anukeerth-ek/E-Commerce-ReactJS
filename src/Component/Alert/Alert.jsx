import React, { useEffect, useState } from 'react'
import './alert.css'
import { useNavigate } from 'react-router-dom'

const AlertBox = ({showPopup, setShowPopup}) => {

  // NAVIGATE TO LOGIN PAGE
  let navigate = useNavigate()
  const navigateLogin = ()=> {
    navigate ("/signup")
  }

  //CLOSE THE POPUP AFTER 10s

  useEffect(() => {
    if (showPopup) {
      const timeoutId = setTimeout(() => {
        setShowPopup(false)
      }, 5000);

      return () => clearTimeout(timeoutId);
    }
  }, [showPopup]);



  return (
    <div className = {showPopup ? 'popup-displayer' : 'hidden-alert'} onClick={navigateLogin}>
       
        <i class="fa-solid fa-triangle-exclamation"></i>
        <span>Please login to add an item</span>
        
    </div>
  )
}

// {showPopup ? 'alert-displayer' : 'hidden-alert'}

export default AlertBox

