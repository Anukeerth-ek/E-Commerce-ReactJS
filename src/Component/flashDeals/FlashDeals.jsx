import React from 'react'
import FlashCard from './FlashCard'

function FlashDeals({productItems, addToCart, renameCart, loginChecker}) {
  
   
  return (
    <div>
        <section className='flash background'>
            <div className='container '>
                <div className='heading f_flex'>
                <i className='fa fa-bolt'></i>
                <h1>50% off on items </h1>
                </div>
                <FlashCard productItems = {productItems} addToCart = {addToCart} renameCart={renameCart} loginChecker={loginChecker}/>
            </div>
        </section>
    </div>
  )
}

export default FlashDeals