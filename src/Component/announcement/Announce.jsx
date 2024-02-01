import React from 'react'

function Announce() {
    const mystyle = {
        width: "30%",
        height: "340px",
      }
      const mystyle1 = {
        width: "70%",
        height: "340px",
      }
  return (
    <>
    <section className='annocument background'>
      <div className='container d_flex'>
        <div style={mystyle}>
          <img src='https://img.freepik.com/premium-vector/flat-design-realistic-banner-template_23-2150102691.jpg' width='100%' height='100%' />
        </div>
        <div style={mystyle1}>
          <img src='./images/photo/banner.jpg' width='100%' height='100%' />
        </div>
      </div>
    </section>
  </>
  )
}

export default Announce