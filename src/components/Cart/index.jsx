import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function CartComponent() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  // Initialize cart from local storage when the component loads
  useEffect(() => {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  // Fetch product data when the component loads
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => {
        console.error('Error fetching product data:', error);
      });
  }, []);

  const calculateTotalItems = () => cart.reduce((total, item) => total + item.quantity, 0);

  const calculateTotalPrice = () => cart.reduce((total, item) => {
    const product = products.find((p) => p.id === item.id);

    // Check if product is defined before accessing its price property
    if (product) {
      return total + product.price * item.quantity;
    }

    return total;
  }, 0).toFixed(2); // Round to 2 decimal places

  return (
    <div className="cart">
      <Link to="/">Home</Link>
      <h1>Checkout</h1>
      <div className="cart-content">
        <p>
          Total Items in Cart:
          {calculateTotalItems()}
        </p>
        <p>
          Total Price: $
          {calculateTotalPrice()}
        </p>
        <button type="button">Checkout</button>
      </div>
    </div>
  );
}

export default CartComponent;

// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import ItemCards from '../Cards';

// function CartComponent() {
//   const [products, setProducts] = useState([]);
//   const [cart, setCart] = useState([]);

//   // Initialize cart from local storage when the component loads
//   useEffect(() => {
//     const storedCart = localStorage.getItem('cart');
//     if (storedCart) {
//       setCart(JSON.parse(storedCart));
//     }
//   }, []);

//   // Fetch product data when the component loads
//   useEffect(() => {
//     fetch('https://fakestoreapi.com/products')
//       .then((response) => response.json())
//       .then((data) => {
//         setProducts(data);
//       })
//       .catch((error) => {
//         console.error('Error fetching product data:', error);
//       });
//   }, []);

//   const removeFromCart = (itemId) => {
//     // Filter out the item to remove from the cart
//     const updatedCart = cart.filter((item) => item.id !== itemId);
//     setCart(updatedCart);

//     // Update local storage with the updated cart
//     localStorage.setItem('cart', JSON.stringify(updatedCart));
//   };

//   const calculateTotalItems = () => cart.reduce((total, item) => total + item.quantity, 0);

//   const calculateTotalPrice = () => cart.reduce((total, item) => {
//     const product = products.find((p) => p.id === item.id);

//     // Check if product is defined before accessing its price property
//     if (product) {
//       return total + product.price * item.quantity;
//     }

//     return total;
//   }, 0).toFixed(2); // Round to 2 decimal places

//   // const calculateTotalPrice = () => cart.reduce((total, item) => {
//   //   const product = products.find((p) => p.id === item.id);
//   //   return total + product.price * item.quantity;
//   // }, 0).toFixed(2); // Round to 2 decimal places

//   return (
//     <div className="cart">
//       <Link to="/">Home</Link>
//       <h1>Checkout</h1>
//       <div className="cart-content">
//         <p>
//           Total Items in Cart:
//           {calculateTotalItems()}
//         </p>
//         <p>
//           Total Price: $
//           {calculateTotalPrice()}
//         </p>
//         {cart.length > 0 ? (
//           <ul>
//             {cart.map((item) => (
//               <li key={item.id}>
//                 {item.name}
//                 (Quantity:
//                 {item.quantity}
//                 )
//                 <button type="button" onClick={() => removeFromCart(item.id)}>
//                   Remove
//                 </button>
//               </li>
//             ))}
//           </ul>
//         ) : (
//           <p>Your cart is empty.</p>
//         )}
//       </div>

//       <div className="product-list">
//         {products.length > 0 && (
//           <div className="card-container">
//             {products.map((product) => (
//               <div key={product.id} className="product">
//                 <ItemCards
//                   product={product}
//                   // If addToCart is needed here, add it.
//                 />
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default CartComponent;

// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import ItemCards from '../Cards';

// function CartComponent() {
//   const [products, setProducts] = useState([]);
//   const [cart, setCart] = useState([]);

//   // Initialize cart from local storage when the component loads
//   useEffect(() => {
//     const storedCart = localStorage.getItem('cart');
//     if (storedCart) {
//       setCart(JSON.parse(storedCart));
//     }
//   }, []);

//   // Fetch product data when the component loads
//   useEffect(() => {
//     fetch('https://fakestoreapi.com/products')
//       .then((response) => response.json())
//       .then((data) => {
//         setProducts(data);
//       })
//       .catch((error) => {
//         console.error('Error fetching product data:', error);
//       });
//   }, []);

//   const removeFromCart = (itemId) => {
//     // Filter out the item to remove from the cart
//     const updatedCart = cart.filter((item) => item.id !== itemId);
//     setCart(updatedCart);

//     // Update local storage with the updated cart
//     localStorage.setItem('cart', JSON.stringify(updatedCart));
//   };

//   const calculateTotalItems = () =>
//     // Calculate the total number of items in the cart
//     cart.reduce((total, item) => total + item.quantity, 0);

//   const calculateTotalPrice = () =>
//     // Calculate the total price of items in the cart
//     cart.reduce((total, item) => {
//       const product = products.find((p) => p.id === item.id);
//       return total + product.price * item.quantity;
//     }, 0).toFixed(2); // Round to 2 decimal places

//   return (
//     <div className="cart">
//       <Link to="/">Home</Link>
//       <h1>Checkout</h1>
//       <div className="cart-content">
//         <p>
//           Total Items in Cart:
//           {calculateTotalItems()}
//         </p>
//         <p>
//           Total Price: $
//           {calculateTotalPrice()}
//         </p>
//         {cart.length > 0 ? (
//           <ul>
//             {cart.map((item) => (
//               <li key={item.id}>
//                 {item.name}
//                 (Quantity:
//                 {item.quantity}
//                 )
//                 <button type="button" onClick={() => removeFromCart(item.id)}>
//                   Remove
//                 </button>
//               </li>
//             ))}
//           </ul>
//         ) : (
//           <p>Your cart is empty.</p>
//         )}
//       </div>

//       <div className="product-list">
//         {products.length > 0 && (
//           <div className="card-container">
//             {products.map((product) => (
//               <div key={product.id} className="product">
//                 <ItemCards
//                   product={product}
//                   // If addToCart is needed here, add it.
//                 />
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default CartComponent;

// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import ItemCards from '../Cards';

// function CartComponent() {
//   const [products, setProducts] = useState([]);
//   const [cart, setCart] = useState([]);
//   const [selectedProducts, setSelectedProducts] = useState([]);

//   // Initialize cart from local storage when the component loads
//   useEffect(() => {
//     const storedCart = localStorage.getItem('cart');
//     if (storedCart) {
//       setCart(JSON.parse(storedCart));
//     }
//   }, []);

//   // Fetch product data when the component loads
//   useEffect(() => {
//     fetch('https://fakestoreapi.com/products')
//       .then((response) => response.json())
//       .then((data) => {
//         setProducts(data);
//       })
//       .catch((error) => {
//         console.error('Error fetching product data:', error);
//       });
//   }, []);

//   const removeFromCart = (itemId) => {
//     // Filter out the item to remove from the cart
//     const updatedCart = cart.filter((item) => item.id !== itemId);
//     setCart(updatedCart);

//     // Update local storage with the updated cart
//     localStorage.setItem('cart', JSON.stringify(updatedCart));
//   };

//   const addToCart = (product) => {
//     // Implement the logic for adding items to the cart
//     // You can add the selected product to the cart and selectedProducts state
//     // to track which products are added to the cart
//     const updatedCart = [...cart, { id: product.id, name: product.title, quantity: 1 }];
//     setCart(updatedCart);
//     setSelectedProducts([...selectedProducts, product.id]);

//     // Update local storage with the updated cart
//     localStorage.setItem('cart', JSON.stringify(updatedCart));
//   };

//   return (
//     <div className="cart">
//       <Link to="/">Home</Link>
//       <h1>Checkout</h1>
//       <div className="cart-content">
//         {cart.length > 0 ? (
//           <ul>
//             {cart.map((item) => (
//               <li key={item.id}>
//                 {item.name}
//                 (Quantity:
//                 {item.quantity}
//                 )
//                 <button type="button" onClick={() => removeFromCart(item.id)}>
//                   Remove
//                 </button>
//               </li>
//             ))}
//           </ul>
//         ) : (
//           <p>Your cart is empty.</p>
//         )}
//       </div>

//       <div className="product-list">
//         {products.length > 0 && (
//           <div className="card-container">
//             {products.map((product) => (
//               <div key={product.id} className="product">
//                 <ItemCards
//                   product={product}
//                   addToCart={addToCart}
//                 />
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//       {/* <CartComponent cart={cart} /> */}
//     </div>
//   );
// }

// export default CartComponent;
