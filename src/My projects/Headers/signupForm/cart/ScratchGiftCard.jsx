import React, { useEffect, useRef }  from 'react';
import ScratchCard from 'react-scratchcard-v2';
import "./style.css";
import couponCover from "./newscratch.jpg";
import ConfettiPopup from './ConfettiPopup'
import OrderPlaced from './OrderPlaced'

const { useState } = React;

 function ScratchGiftCard() {
  
  const [callConfetti, setCallConfetti] = useState(false)
  

  const [scratchedText, setScratchedText] = useState('');
  const handleScratchComplete = () => {
    console.log("The card is now clear!");
    setScratchedText( "Rs.75");
    setCallConfetti(true)
  };
  const geht = false;
  const settings = {
    width: 500,
    height: 380,
    image: couponCover,
    finishPercent: 90,
    onComplete: () => handleScratchComplete()
  };


  // LETS SHOW ORDERED MESSAGE HERE

  const[showOrderMsg, setShowOrderMsg] = useState(false)
  const [hideScratch, setHideScratch] = useState(true)
  const handleOrderPlaced = ()=> {
    setShowOrderMsg(true)
    setHideScratch(false)
  }

  return (
    <>
   <div className='confetti-style'>

        { callConfetti && <ConfettiPopup/>}
   </div>
        { showOrderMsg && <OrderPlaced/>}
        {hideScratch && <div className="scratch-gift">
     <ScratchCard {...settings}>
        {geht ? (
          <div>
            <p>hallo</p>
          </div>
        ) : (
          <div className="Text-gift"> 
          <img src='../images/items/cashback.png'/>
          <h3>You won</h3>
          <div className='center-tex'>

          <h1>{scratchedText}</h1>
          </div>
          </div>
        )}
      </ScratchCard> 
        <button className='claim-btn' onClick={handleOrderPlaced}>Claim</button>
    </div>}
    </>
  );
}


export default ScratchGiftCard;