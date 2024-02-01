import React from 'react'
import './footer.css'
function Footer() {
  return (
    <>
      <footer>
        <div className='container grid2 d_flex'>
          <div className='box margin'>
            <img src="./images/logo/newLogo.png" className='logo'/>
            <p>"Welcome to shopEase, where shopping meets simplicity! Unleash the power of hassle-free browsing and discover a world of effortless shopping at your fingertips. With shopEase, we redefine convenience, offering a seamless and enjoyable experience from browsing to checkout. "</p>
            <div className='icon d_flex'>
              <div className='img d_flex'>
                <i class='fa-brands fa-google-play'></i>
                <span>Google Play</span>
              </div>
              <div className='img d_flex'>
                <i class='fa-brands fa-app-store-ios'></i>
                <span>App Store</span>
              </div>
            </div>
          </div>

          <div className='box'>
            <h2>Get to Know Us</h2>
            <ul className='footer'>
              <li>OUr Careers</li>
              <li>Our Stores</li>
              <li>Our Cares</li>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
     <div className='box'>
            <h2>Make money with us</h2>
            <ul className='footer'>
              <li> Sell on ShopEase</li>
              <li>Sell under ShopEase Accelerator </li>
              <li>Protect and Build Your Brand</li>
              <li>Corporate & Bulk Purchasing </li>
              <li>Become an Affiliate</li>
            </ul>
          </div>
          <div className='box'>
            <h2>Connect with us</h2>
            <ul className='footer'>
              <li>30 Red Lane Reswallie, NewYork, United States </li>
              <li>Email: ShopEase.help@gmail.com</li>
              <li>Phone: +44 078 1516 6573</li>
            </ul>
          </div>
        </div>
      </footer>
    </>

  )
}

export default Footer