import React, { useEffect, useState } from 'react'
import './style.css'

const SucessPagePopup = ({loginState, displayScratch, showScratchCard}) => {

  
  const[ showSucessPopup, setShowSucessPopup] = useState(false)
  useEffect(()=> {
   setTimeout(() => {
    
     setShowSucessPopup(true)
   }, 1000);
    
    
  }, [])
  return (
    <>
  
    <div className={showSucessPopup && !showScratchCard ? "show-sucess-popup" : "hide-page-popup" }>
     
        <h3>Congratulations!! You won a Scratch card!</h3>
        <div>

        <button className='maybe'>May be Later</button>
        <button onClick={displayScratch}>Claim Now</button>
        </div>
    </div>
  
    </>
  )
}

export default SucessPagePopup;