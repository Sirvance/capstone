import React, { useEffect, useState } from 'react';

function Cart() {
  // Create state to store cart data
  const [cartData, setCartData] = useState([]);

  // Use useEffect to fetch cart data when the component mounts
  useEffect(() => {
    fetch('https://fakestoreapi.com/carts')
      .then((res) => res.json())
      .then((data) => {
        // Assuming the data structure has an array of cart items
        setCartData(data); // Store the fetched data in the state
      })
      .catch((error) => {
        console.error('Error fetching cart data:', error);
      });
  }, []); // Empty dependency array to fetch data only once when the component mounts

  return (
    <div className="cart">
      <h1>Your Cart</h1>
      <ul>
        {/* Map through the cartData and display cart items */}
        {cartData.map((item, index) => (
          <li key={index}>
            {item.product.name}
            Quantity:
            {item.quantity}
          </li>
          // Adjust this code based on the actual structure of the cart data
        ))}
      </ul>
    </div>
  );
}

export default Cart;

// import React, { useState, useEffect } from 'react';
// import { getCart } from '../../services/cartService';

// function Cart() {
//   const [cartItems, setCartItems] = useState([]);

//   // Use useEffect to update cartItems when the cart changes
//   useEffect(() => {
//     const cart = getCart();
//     setCartItems(cart);
//   }, []);

//   return (
//     <div className="cart">
//       <h1>CART</h1>
//       <ul>
//         {cartItems.map((item) => (
//           <li key={item.id}>{item.title}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default Cart;

// import React from 'react';
// // import PropTypes from 'prop-types';
// import { getCart } from '../../services/cartService';

// function Cart() {
//   const cart = getCart();
//   return (
//     <div className="cart">
//       <h1>CART</h1>
//       <ul>
//         {cart.map((item) => (
//           <li key={item.id}>{item.title}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// // Cart.propTypes = {
// //   cart: PropTypes.arrayOf(
// //     PropTypes.shape({
// //       id: PropTypes.number.isRequired,
// //       title: PropTypes.string.isRequired,
// //     }),
// //   ).isRequired,
// // };

// export default Cart;
