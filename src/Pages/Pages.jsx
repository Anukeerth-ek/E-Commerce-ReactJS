import React from 'react'
import Home from '../Component/mainpage/Home'
import FlashDeals from '../Component/flashDeals/FlashDeals'
import TopCate from '../Component/top/TopCate'
import NewArrivals from '../Component/newArrivals/NewArrivals'
import Discount from '../Component/Discount/Discount'
import Shop from '../Component/shop/Shop'
import Announce from '../Component/announcement/Announce'
import Wrapper from '../Component/Wrapper/Wrapper'
function Pages({productItems,cartItem, addToCart, shopItems, renameCart, loginChecker}) {

  return (
    <>
    <Home cartItem = {cartItem}/>
    <FlashDeals productItems = {productItems} addToCart = {addToCart} renameCart = {renameCart} loginChecker={loginChecker}/>
    <TopCate />
    <NewArrivals/>
    <Discount/>
    <Shop shopItems={shopItems} addToCart = {addToCart} />
    {/* <Announce/> */}
    <Wrapper/>
    </>
  )
}

export default Pages