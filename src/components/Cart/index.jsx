import React, { useState, useEffect } from 'react';
// import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function CartComponent() {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]); // Sample product data, replace
  const [cart, setCart] = useState([]);

  // useEffect(() => {
  //   // Simulate loading cart data
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 1000);
  // }, []);

  // Initialize cart from local storage when the component loads
  useEffect(() => {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, [cart]);
  useEffect(() => {
    fetch('https://fakestoreapi.com/carts') // Replace with the API endpoint
      .then((response) => response.json())
      .then((data) => {
        // Assuming the API response contains the list of products
        setProducts(data); // Update the products state with API data
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching product data:', error);
        setLoading(false);
      });
  }, [cart]);

  // Define cartContent as null by default
  let cartContent = null;

  // Check if cart is defined before accessing its properties
  if (cart && cart.length > 0) {
    cartContent = (
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            {item.name}
            (Quantity:
            {item.quantity}
            )
          </li>
        ))}
      </ul>
    );
  } else if (!loading) {
    cartContent = <p>Your cart is empty.</p>;
  }

  // Update cart and local storage when adding items
  const addToCart = (product) => {
    const existingProductIndex = cart.findIndex((item) => item.id === product.id);

    if (existingProductIndex !== -1) {
    // If it's in the cart, create a new cart with updated quantity
      const updatedCart = [...cart];
      updatedCart[existingProductIndex].quantity += 1;
      setCart(updatedCart);
    } else {
    // If it's not in the cart, add it to the cart with a quantity of 1
      setCart([...cart, { ...product, quantity: 1 }]);
    }

    // Update local storage with the updated cart
    localStorage.setItem('cart', JSON.stringify(cart));
  };
  // const addToCart = (product) => {
  //   // Check if the product is already in the cart
  //   const existingProductIndex = cart.findIndex((item) => item.id === product.id);

  //   if (existingProductIndex !== -1) {
  //     // If it's in the cart, create a new cart with updated quantity
  //     const updatedCart = [...cart];
  //     updatedCart[existingProductIndex].quantity += 1;
  //     setProducts(updatedCart);
  //   } else {
  //     // If it's not in the cart, add it to the cart with a quantity of 1
  //     setProducts([...cart, { ...product, quantity: 1 }]);
  //   }
  // };

  return (
    <div className="cart">
      <Link to="/">Home</Link>
      <h1>CART</h1>
      {cartContent}

      {products.map((product) => (
        <div key={product.id}>
          <h2>{product.name}</h2>
          <p>
            Price: $
            {product.price}
          </p>
          <button type="button" onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
}

// CartComponent.propTypes = {
// cart: PropTypes.arrayOf(
//   PropTypes.shape({
//     id: PropTypes.number.isRequired,
//     name: PropTypes.string.isRequired,
//     quantity: PropTypes.number.isRequired,
//   }),
// ).isRequired,
// };
export default CartComponent;

// import React, { useState, useEffect } from 'react';
// import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';

// function CartComponent({ cart }) {
//   const [loading, setLoading] = useState(true);
//   // const [products, setProducts] = useState([]); // Sample product data, replace

//   useEffect(() => {
//     // Simulate loading cart data
//     setTimeout(() => {
//       setLoading(false);
//     }, 1000);
//   }, []);

//   // ... rest of your component code ...

//   return (
//     <div className="cart">
//       <Link to="/">Home</Link>
//       <h1>CART</h1>
//       {cartContent}

//       {/* Replace 'products' with your actual product data */}
//       {/* {products.map((product) => (
//         <div key={product.id}>
//           <h2>{product.name}</h2>
//           <p>
//             Price: $
//             {product.price}
//           </p>
//           <button onClick={() => addToCart(product)}>Add to Cart</button>
//         </div>
//       ))} */}
//     </div>
//   );
// }

// CartComponent.propTypes = {
//   cart: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.number.isRequired,
//       name: PropTypes.string.isRequired,
//       quantity: PropTypes.number.isRequired,
//     }),
//   ).isRequired,
// };

// export default CartComponent;

// import React, { useState, useEffect } from 'react';
// import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';

// function CartComponent({ cart }) {
//   const [loading, setLoading] = useState(true);
//   const [products, setProducts] = useState([]); // Sample product data, replace
//   const [cartState, setCart] = useState(cart); // State to manage the cart

//   useEffect(() => {
//     // Simulate loading cart data
//     setTimeout(() => {
//       setLoading(false);
//     }, 1000);
//   }, []);

//   // Define cartContent as null by default
//   let cartContent = null;

//   // Check if cartState is defined before accessing its properties
//   if (cartState && cartState.length > 0) {
//     cartContent = (
//       <ul>
//         {cartState.map((item) => (
//           <li key={item.id}>
//             {item.name}
//             (Quantity:
//             {item.quantity}
//             )
//           </li>
//         ))}
//       </ul>
//     );
//   } else if (!loading) {
//     cartContent = <p>Your cart is empty.</p>;
//   }

//   const addToCart = (product) => {
//     // Check if the product is already in the cart
//     const existingProductIndex = cartState.findIndex((item) => item.id === product.id);

//     if (existingProductIndex !== -1) {
//       // If it's in the cart, create a new cart with updated quantity
//       const updatedCart = [...cartState];
//       updatedCart[existingProductIndex].quantity += 1;
//       setCart(updatedCart);
//     } else {
//       // If it's not in the cart, add it to the cart with a quantity of 1
//       setCart([...cartState, { ...product, quantity: 1 }]);
//     }
//   };

//   // Render the cart and products
//   return (
//     <div className="cart">
//       <Link to="/">Home</Link>
//       <h1>CART</h1>
//       {cartContent}

//       {/* Replace 'products' with your actual product data */}
//        {products.map((product) => (
//         <div key={product.id}>
//           <h2>{product.name}</h2>
//           <p>
//             Price: $
//             {product.price}
//           </p>
//           <button type="button" onClick={() => addToCart(product)}>Add to Cart</button>
//         </div>
//       ))}
//     </div>
//   );
// }

// CartComponent.propTypes = {
//   cart: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.number.isRequired,
//       name: PropTypes.string.isRequired,
//       quantity: PropTypes.number.isRequired,
//     }),
//   ).isRequired,
// };

// export default CartComponent;

// import React, { useState, useEffect } from 'react';
// import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';

// function CartComponent({ cart }) {
//   const [loading, setLoading] = useState(true);
//   const [products, setProducts] = useState([]); // Sample product data, replace

//   useEffect(() => {
//     // Simulate loading cart data
//     setTimeout(() => {
//       setLoading(false);
//     }, 1000);
//   }, []);

//   // Define cartContent as null by default
//   let cartContent = null;

//   // Check if cart is defined before accessing its properties
//   if (cart && cart.length > 0) {
//     cartContent = (
//       <ul>
//         {cart.map((item) => (
//           <li key={item.id}>
//             {item.name}
//             (Quantity:
//             {item.quantity}
//             )
//           </li>
//         ))}
//       </ul>
//     );
//   } else if (!loading) {
//     cartContent = <p>Your cart is empty.</p>;
//   }

//   const addToCart = (product) => {
//     // Check if the product is already in the cart
//     const existingProductIndex = cart.findIndex((item) => item.id === product.id);

//     if (existingProductIndex !== -1) {
//       // If it's in the cart, create a new cart with updated quantity
//       const updatedCart = [...cart];
//       updatedCart[existingProductIndex].quantity += 1;
//       setCart(updatedCart);
//     } else {
//       // If it's not in the cart, add it to the cart with a quantity of 1
//       setCart([...cart, { ...product, quantity: 1 }]);
//     }
//   };

//   return (
//     <div className="cart">
//       <Link to="/">Home</Link>
//       <h1>CART</h1>
//       {cartContent}

//       {products.map((product) => (
//         <div key={product.id}>
//           <h2>{product.name}</h2>
//           <p>
//             Price: $
//             {product.price}
//           </p>
//           <button onClick={() => addToCart(product)}>Add to Cart</button>
//         </div>
//       ))}
//     </div>
//   );
// }

// CartComponent.propTypes = {
//   cart: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.number.isRequired,
//       name: PropTypes.string.isRequired,
//       quantity: PropTypes.number.isRequired,
//     }),
//   ).isRequired,
// };

// export default CartComponent;

// import React, { useEffect, useState } from 'react';
// import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';

// function CartComponent({ cart }) {
//   const [loading, setLoading] = useState(true); // State to track loading state

//   useEffect(() => {
//     // Simulate loading cart data
//     setTimeout(() => {
//       setLoading(false);
//     }, 1000);
//   }, []); // The empty dependency array ensures this effect runs once when the component mounts

//   // Define cartContent as null by default
//   let cartContent = null;

//   // Check if cart is defined before accessing its properties
//   if (cart && cart.length > 0) {
//     cartContent = (
//       <ul>
//         {cart.map((item) => (
//           <li key={item.id}>
//             {item.name}
//             (Quantity:
//             {item.quantity}
//             )
//           </li>
//         ))}
//       </ul>
//     );
//   } else if (!loading) {
//     cartContent = <p>Your cart is empty.</p>;
//   }

//   return (
//     <div className="cart">
//       <Link to="/">Home</Link>
//       <h1>CART</h1>
//       {cartContent}
//     </div>
//   );
// }

// CartComponent.propTypes = {
//   cart: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.number.isRequired,
//       name: PropTypes.string.isRequired,
//       quantity: PropTypes.number.isRequired,
//       // Add any other required prop types for each item in the cart
//     }),
//   ).isRequired,
// };

// export default CartComponent;
