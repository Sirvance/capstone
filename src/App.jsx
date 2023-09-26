import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/navBar';
import ItemCards from './components/Cards';
import CartComponent from './components/Cart';
import './App.css';

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  // Function to add items to the cart
  const addToCart = (product) => {
    // Check if the product is already in the cart
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
  };

  useEffect(() => {
    const getAllData = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        setProducts(data);
      } catch (err) {
        console.error(err);
      }
    };
    getAllData();
  }, []);

  return (
    <div className="App">
      <NavBar />

      {/* Pass the addToCart function to ItemCards component */}
      <div className="product-list">
        {products.length > 0 && (
          <div className="card-container">
            {products.map((product) => (
              <div key={product.id} className="product">
                <ItemCards
                  product={product}
                  addToCart={() => addToCart(product)} // Pass the product as an argument
                />
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Render the CartComponent and pass the cart items */}
      <CartComponent cart={cart} />
    </div>
  );
}

export default App;

// // Inside App.js
// import React, { useEffect, useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import NavBar from './components/navBar';
// import ItemCards from './components/Cards';
// import CartComponent from './components/Cart';
// // import Home from './components/Home';
// import './App.css';

// function App() {
//   const [products, setProducts] = useState([]);
//   const [cart, setCart] = useState([]);
//   const userAuthenticated = true;

//   // Function to add items to the cart
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

//   useEffect(() => {
//     const getAllData = async () => {
//       try {
//         const response = await fetch('https://fakestoreapi.com/products');
//         const data = await response.json();
//         setProducts(data);
//       } catch (err) {
//         console.error(err);
//       }
//     };
//     getAllData();
//   }, []);

//   return (
//     <div className="App">
//       <NavBar />
//       {/* <Home /> */}
//       {userAuthenticated ? (
//         <div className="product-list">
//           {products.length > 0 && (
//             <div className="card-container">
//               {products.map((product) => (
//                 <div key={product.id} className="product">
//                   <ItemCards
//                     product={product}
//                     addToCart={() => addToCart(product)} // Pass the product as an argument
//                   />
//                 </div>
//               ))}
//             </div>
//           )}
//         </div>
//       ) : (
//         <CartComponent cart={cart} />
//       )}
//     </div>
//   );
// }

// export default App;
