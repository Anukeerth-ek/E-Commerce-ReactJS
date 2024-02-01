import ConfettiExplosion from "react-confetti-explosion";
import React, { useEffect } from "react";
import "./style.css";

export default function ConfettiPopup() {
  const settings = {
    force: 1,
    duration: 3000,
    particleCount: 300,
    width: 1500,
  }
  const [isExploding, setIsExploding] = React.useState(false);
  
  useEffect(() => {
     setIsExploding(true)
  }, [])
  
  return <>
  
  {isExploding && <ConfettiExplosion {...settings}/>}
  {/* { <OrderPlaced/>} */}
  </>;
}


