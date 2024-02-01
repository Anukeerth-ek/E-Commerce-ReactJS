import React from 'react'
import './style.css'
import { useState } from 'react'

function Wrapper() {
    const data = [
        {
          question: "Are there any additional fees or charges associated with online purchases?",
          answer: "No, we do not impose any extra fees or charges on your online purchases. The price you see for each product is the final amount you will pay at checkout. However, please be aware that your financial institution or payment provider may have their own terms and conditions, which could include transaction fees. It's advisable to check with them directly for any potential additional charges related to your specific payment method.",

        }, 

        {
          question: "Are there any shipping charges?",
          answer: "Shipping charges vary by website and can depend on factors like location and shipping speed. Review the shipping information during the checkout process.",

        },
        {
          question: "What if I receive a damaged or defective product?",
          answer: "Contact the customer support of the e-commerce platform as soon as possible. Most platforms have a process for handling damaged or defective items and may offer a replacement or refund.",

        },
        {
          question: "What is the difference between Add to Cart and Wishlist?",
          answer: "Add to Cart puts items in your shopping cart for immediate purchase, while Wishlist allows you to save items for future consideration. Items in the wishlist are not reserved and may go out of stock."
        }
      ]

      // SCRIPT FOR FAQ IS HERE
      const [showAnswer, setShowAnswer] = useState(null)
    

      const handleFaq = (index)=> {
         if(showAnswer === index) {
          return setShowAnswer(null)
         }
         setShowAnswer(index)
      } 

  return (
    <>
        <h2 className='faq'>Frequently Asked Questions</h2>
      <section className='wrapper-container'>
        <div className='wrapper-content'>
          {data.map((val, index) => {
           return (
              <div className='faq-content' key={index}>
               
               <div className='flex-justify' onClick={()=> {
                handleFaq(index)
               }}
               >
                <h3 className='question'>{val.question}</h3>
                <i class={showAnswer === index ? "fa-solid fa-xmark" : 'fa-solid fa-plus'}></i>
                </div>
                <p className= {showAnswer === index ? 'hide-faq-answer' : 'show-faq-answer'}>{val.answer}</p>
              </div>
            )
          })}
        </div>
      </section>
    </>
  )
}

export default Wrapper