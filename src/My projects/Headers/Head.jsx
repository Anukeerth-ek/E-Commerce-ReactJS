
import React from 'react'

function Head() {
  return (
    <>
       <section className='head'>
        <div className='container d_flex'>
            <div className='left row'>
                <i className='fa fa-phone'></i>
                <label>+92486 238 192</label>
                <i className='fa fa-envelope'></i>
                <label>text@gmail.com</label>
            </div>
            <div className='right row RText'>
                <label>Theme FAQ's</label>
                <label>Need Helps</label>
                <i class="fa-solid fa-heart"></i>
                <label>EN</label>
                <span><img width="25" src="https://img.icons8.com/color/48/india.png" /></span>
                <label>USD</label>
            </div>
        </div>
       </section>
    </>
  )
}

export default Head