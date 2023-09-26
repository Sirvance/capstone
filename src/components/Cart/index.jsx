import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function CartComponent() {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  // Initialize cart from local storage when the component loads
  useEffect(() => {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
    setLoading(false);
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

  // Define cartContent as null by default
  let cartContent = null;

  const removeFromCart = (itemId) => {
    // Find the item to remove from the cart
    const itemToRemove = cart.find((item) => item.id === itemId);

    if (itemToRemove) {
      // If the item is in the cart, subtract 1 from its quantity
      const updatedCart = cart.map((item) =>
        item.id === itemId
          ? { ...item, quantity: item.quantity - 1 }
          : item
      );

      // Filter out items with quantity greater than 0
      const filteredCart = updatedCart.filter((item) => item.quantity > 0);
      setCart(filteredCart);

      // Update local storage with the filtered cart
      localStorage.setItem('cart', JSON.stringify(filteredCart));
    }
  };

  const addToCart = () => {
    // Implement the logic for adding items to the cart
    // You can use a similar addToCart function as in your previous code
  };

  if (cart.length > 0) {
    cartContent = (
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            {item.name}
            (Quantity:
            {item.quantity}
            )
            <button type="button" onClick={() => removeFromCart(item.id)}>
              Remove
            </button>
          </li>
        ))}
      </ul>
    );
  } else if (!loading) {
    cartContent = <p>Your cart is empty.</p>;
  }

  return (
    <div className="cart">
      <Link to="/">Home</Link>
      <h1>CART</h1>
      {cartContent}

      {products.map((product) => (
        <div key={product.id}>
          <h2>{product.title}</h2>
          <p>
            Price: $
            {product.price}
          </p>
          <button type="button" onClick={() => addToCart(product)}>
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
}

export default CartComponent;

// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';

// function CartComponent() {
//   const [loading, setLoading] = useState(true);
//   const [products, setProducts] = useState([]);
//   const [cart, setCart] = useState([]);

//   // Initialize cart from local storage when the component loads
//   useEffect(() => {
//     const storedCart = localStorage.getItem('cart');
//     if (storedCart) {
//       setCart(JSON.parse(storedCart));
//     }
//     setLoading(false);
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

//   // Define cartContent as null by default
//   let cartContent = null;

//   const removeFromCart = (itemId) => {
//     // Filter out the item to remove from the cart
//     const updatedCart = cart.filter((item) => item.id !== itemId);
//     setCart(updatedCart);

//     // Update local storage with the updated cart
//     localStorage.setItem('cart', JSON.stringify(updatedCart));
//   };

//   const addToCart = () => {
//     // Implement the logic for adding items to the cart
//     // You can use a similar addToCart function as in your previous code
//   };

//   if (cart.length > 0) {
//     cartContent = (
//       <ul>
//         {cart.map((item) => (
//           <li key={item.id}>
//             {item.name}
//             (Quantity:
//             {item.quantity}
//             )
//             <button type="button" onClick={() => removeFromCart()}>
//               Remove
//             </button>
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

//       {products.map((product) => (
//         <div key={product.id}>
//           <h2>{product.title}</h2>
//           <p>
//             Price: $
//             {product.price}
//           </p>
//           <button type="button" onClick={() => addToCart(product)}>
//             Add to Cart
//           </button>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default CartComponent;

// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';

// function CartComponent() {
//   const [loading, setLoading] = useState(true);
//   const [products, setProducts] = useState([]);
//   const [cart, setCart] = useState([]);

//   // Initialize cart from local storage when the component loads
//   useEffect(() => {
//     const storedCart = localStorage.getItem('cart');
//     if (storedCart) {
//       setCart(JSON.parse(storedCart));
//     }
//     setLoading(false);
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

//   // Define cartContent as null by default
//   let cartContent = null;

//   const removeFromCart = (itemId) => {
//     // Filter out the item to remove from the cart
//     const updatedCart = cart.filter((item) => item.id !== itemId);
//     setCart(updatedCart);

//     // Update local storage with the updated cart
//     localStorage.setItem('cart', JSON.stringify(updatedCart));
//   };

//   const addToCart = (product) => {
//     // Implement the logic for adding items to the cart
//     // You can use a similar addToCart function as in your previous code
//   };

//   if (cart.length > 0) {
//     cartContent = (
//       <ul>
//         {cart.map((item) => (
//           <li key={item.id}>
//             {item.name}
//             (Quantity:
//             {item.quantity}
//             )
//             <button onClick={() => removeFromCart(item.id)}>Remove</button>
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

//       {products.map((product) => (
//         <div key={product.id}>
//           <h2>{product.title}</h2>
//           <p>
//             Price: $
//             {product.price}
//           </p>
//           <button type="button" onClick={() => addToCart(product)}>
//             Add to Cart
//           </button>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default CartComponent;
