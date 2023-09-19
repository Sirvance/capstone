import React, { useEffect, useState } from 'react';

function CartComponent() {
  const [cartData, setCartData] = useState([]);
  const [loading, setLoading] = useState(true); // State to track loading state

  useEffect(() => {
    // Define the API endpoint URL
    const apiUrl = 'https://fakestoreapi.com/carts';

    // Make an HTTP GET request to the API
    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json(); // Parse the JSON response
      })
      .then((data) => {
        setCartData(data); // Update the state with the fetched data
        setLoading(false); // Set loading to false when data is loaded
      })
      .catch((error) => {
        console.error('Error fetching cart data:', error);
        setLoading(false); // Set loading to false in case of an error
      });
  }, []); // The empty dependency array ensures this effect runs once when the component mounts

  return (
    <div className="cart">
      <h1>CART</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {cartData.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default CartComponent;

// import React, { useState, useEffect } from 'react';

// function Cart() {
//   const [cartData, setCartData] = useState([]); // State to store the fetched data

//   useEffect(() => {
//     // Fetch data when the component mounts
//     fetch('https://fakestoreapi.com/products')
//       .then((res) => res.json())
//       .then((data) => {
//         setCartData(data); // Store the fetched data in the state
//       })
//       .catch((error) => {
//         console.error('Error fetching cart data:', error);
//       });
//   }, []); // The empty dependency array ensures this effect runs once when the component mounts

//   return (
//     <div className="cart">
//       <h1>CART</h1>
//       <ul>
//         {cartData.map((item) => (
//           <li key={item.id}>{item.name}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default Cart;

// import React, { useState, useEffect } from 'react';
// // import PropTypes from 'prop-types'; // Import PropTypes
// import { getCart } from '../../services/cartService';

// function Cart() {
//   const [cartItems, setCartItems] = useState([]);

//   // Use useEffect to update cartItems when the cart changes
//   useEffect(() => {
//     const fetchedCart = getCart(); // Rename the variable to avoid shadowing
//     setCartItems(fetchedCart);
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
