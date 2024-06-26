import "./App.css";
import React, { useState, lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route, Link, useNavigate } from "react-router-dom";
import Header from "./My projects/Headers/Header";
import Pages from "./Pages/Pages";
import Data from "./Component/flashDeals/Data";
import SData from "./Component/shop/Sdata";
import Footer from "./My projects/footer/Footer";
import Cart from "./My projects/Headers/signupForm/cart/Cart";
import Signup from "./My projects/Headers/signupForm/Signup";
import Payment from "./My projects/Headers/signupForm/cart/Payment";
import Search from "./My projects/Headers/Search";
import SearchWrapper from "./My projects/Headers/SearchWrapper";

const LazyCart = lazy(() => import("./My projects/Headers/signupForm/cart/Cart"));

const LazySignup = lazy(() => import("./My projects/Headers/signupForm/Signup"));

const LazyPayment = lazy(() => import("./My projects/Headers/signupForm/cart/Payment"));
// import { CartProvider } from './ContextApi/CartContext';

function App() {
     const { productItems } = Data;
     const { shopItems } = SData;

     const [cartItem, setCartItem] = useState([]);
     const [renameCart, setRenameCart] = useState(false);

     //  ADD TO CART
     const addToCart = (product) => {
          setRenameCart(true);

          const productExit = cartItem.find((item) => item.id === product.id);

          if (productExit) {
               setCartItem(
                    cartItem.map((item) => (item.id === product.id ? { ...productExit, qty: productExit.qty + 1 } : item))
               );
          } else {
               setCartItem([...cartItem, { ...product, qty: 1 }]);
          }
     };

     // REMOVE FROM CART
     const decreaseQty = (product) => {
          const productExit = cartItem.find((item) => item.id === product.id);
          if (productExit.qty === 1) {
               setCartItem(cartItem.filter((item) => item.id != product.id));
          } else {
               setCartItem(
                    cartItem.map((item) => (item.id === product.id ? { ...productExit, qty: productExit.qty - 1 } : item))
               );
          }
     };

     // CHECKING IF SIGN IN OR NOT
     const [loginState, setLoginState] = useState("");

     const [loginChecker, setLoginChecker] = useState(false);

     const handleClick = (event) => {
          setLoginState(event.target.value);
     };

     const loginHandler = (event) => {
          event.preventDefault();

          if (loginState.trim().length !== 0) {
               setLoginChecker(true);
          } else {
               setLoginChecker(false);
          }
     };

     //   FOR CART SECTION

     const totalPrice = cartItem.reduce((price, item) => price + item.qty * item.price, 0);

     let discount = 25;
     let lastTotalAmount = totalPrice - discount;

     // FOR MAKING SEARCH COMPONENT ONLY DISPLAY WHEN ' HOME ' IS ACTIVE

     return (
          // <CartProvider>
          <BrowserRouter>
               <Header />

               <SearchWrapper>
                    <Search cartItem={cartItem} />
               </SearchWrapper>

               <Routes>
                    <Route
                         path="/"
                         element={
                              <Pages
                                   productItems={productItems}
                                   addToCart={addToCart}
                                   shopItems={shopItems}
                                   renameCart={renameCart}
                                   loginChecker={loginChecker}
                              />
                         }
                    />

                    <Route
                         path="/cart"
                         element={
                              <Suspense>
                                   <LazyCart
                                        cartItem={cartItem}
                                        addToCart={addToCart}
                                        decreaseQty={decreaseQty}
                                        loginState={loginState}
                                        totalPrice={totalPrice}
                                        discount={discount}
                                        lastTotalAmount={lastTotalAmount}
                                   />
                              </Suspense>
                         }
                    />

                    <Route
                         path="/signup"
                         element={
                              <Suspense fallback={<div>Loading...</div>}>
                                   <LazySignup
                                        loginHandler={loginHandler}
                                        handleClick={handleClick}
                                        loginChecker={loginChecker}
                                   />
                              </Suspense>
                         }
                    />
                    <Route
                         path="/cart/myorders"
                         element={
                              <Suspense fallback={<div>Loading...</div>}>
                                   <LazyPayment
                                        totalPrice={totalPrice}
                                        discount={discount}
                                        lastTotalAmount={lastTotalAmount}
                                   />
                              </Suspense>
                         }
                    />
               </Routes>
               <Footer path="/about" />
          </BrowserRouter>

          // </CartProvider>
     );
}

export default App;
