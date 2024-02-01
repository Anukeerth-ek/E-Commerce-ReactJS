// import React, { createContext, useContext, useState } from 'react';

// const CartContext = createContext();

// export const CartProvider = ({ children }) => {
//   const [addedToCart, setAddedToCart] = useState([]);

//   const addToCart = (index ) => {
   
//     setAddedToCart((prev) => {
        
//         return(
           
//             [...prev, index]
//         )
//     });
//   };

//   return (
//     <CartContext.Provider value={{ addedToCart, addToCart }}>
//       {children}
//     </CartContext.Provider>
//   );
// };

// export const useCart = () => {
//   const context = useContext(CartContext);
//   if (!context) {
//     throw new Error('useCart must be used within a CartProvider');
//   }
//   return context;
// };





