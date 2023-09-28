// import React, { useState, useEffect } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import NavBar from './components/navBar';
// import ItemCards from './components/Cards';
// import CartComponent from './components/Cart';
// import Filter from './components/Productfilter';
// import './App.css';

// function App() {
//   const [products, setProducts] = useState([]);
//   const [cart, setCart] = useState([]);
//   const [selectedCategory, setSelectedCategory] = useState('All');

//   // Function to add items to the cart
//   const addToCart = (product) => {
//     const existingProductIndex = cart.findIndex((item) => item.id === product.id);

//     if (existingProductIndex !== -1) {
//       const updatedCart = [...cart];
//       updatedCart[existingProductIndex].quantity += 1;
//       setCart(updatedCart);
//     } else {
//       setCart([...cart, { ...product, quantity: 1 }]);
//     }
//   };

//   // Function to filter products based on the selected category
//   const filterProducts = (category) => {
//     setSelectedCategory(category);
//   };

//   useEffect(() => {
//     const getAllData = async () => {
//       try {
//         let url = 'https://fakestoreapi.com/products';

//         if (selectedCategory !== 'All') {
//           url = `https://fakestoreapi.com/products/category/${selectedCategory.toLowerCase()}`;
//         }

//         const response = await fetch(url);
//         const data = await response.json();
//         setProducts(data);
//       } catch (err) {
//         console.error(err);
//       }
//     };

//     getAllData();
//   }, [selectedCategory]);

//   return (
//     <div className="App">
//       <NavBar />
//       {/* Render the Filter component on both the home page and the cart page */}
//       <Filter onCategoryChange={filterProducts} />

//       {/* Conditional rendering based on whether you are on the home page or the cart page */}
//       {window.location.pathname === '/cart' ? (
//         <CartComponent cart={cart} />
//       ) : (
//         <div className="product-list">
//           {products.length > 0 && (
//             <div className="card-container">
//               {products.map((product) => (
//                 <div key={product.id} className="product">
//                   <ItemCards
//                     product={product}
//                     addToCart={() => addToCart(product)}
//                   />
//                 </div>
//               ))}
//             </div>
//           )}
//         </div>
//       )}
//     </div>
//   );
// }

// export default App;

// import React, { useEffect, useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import NavBar from './components/navBar';
// import ItemCards from './components/Cards';
// import CartComponent from './components/Cart';
// import Filter from './components/Productfilter'; // Import the Filter component
// import './App.css';

// function App() {
//   const [products, setProducts] = useState([]);
//   const [cart, setCart] = useState([]);
//   const [selectedCategory, setSelectedCategory] = useState('All');

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

//   // Function to filter products based on the selected category
//   const filterProducts = (category) => {
//     setSelectedCategory(category);
//   };

//   useEffect(() => {
//     const getAllData = async () => {
//       try {
//         let url = 'https://fakestoreapi.com/products';

//         if (selectedCategory !== 'All') {
//           // If a specific category is selected, modify the API URL
//           url = `https://fakestoreapi.com/products/category/${selectedCategory.toLowerCase()}`;
//         }

//         const response = await fetch(url);
//         const data = await response.json();
//         setProducts(data);
//       } catch (err) {
//         console.error(err);
//       }
//     };
//     getAllData();
//   }, [selectedCategory]);

//   return (
//     <div className="App">
//       <NavBar />
//       <Filter onCategoryChange={filterProducts} />
//       {/* Pass the filterProducts function */}
//       <div className="product-list">
//         {products.length > 0 && (
//           <div className="card-container">
//             {products.map((product) => (
//               <div key={product.id} className="product">
//                 <ItemCards
//                   product={product}
//                   addToCart={() => addToCart(product)}
//                 />
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//       <CartComponent cart={cart} />
//     </div>
//   );
// }

// export default App;r

// import React, { useEffect, useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import NavBar from './components/navBar';
// import ItemCards from './components/Cards';
// import CartComponent from './components/Cart';
// // import Filter from './components/Filter';
// import './App.css';

// function App() {
//   const [products, setProducts] = useState([]);
//   const [cart, setCart] = useState([]);

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
//   // // Function to filter products based on the selected category
//   // const filterProducts = (category) => {
//   //   setSelectedCategory(category);
//   // };

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

//       {/* Pass the addToCart function to ItemCards component */}
//       <div className="product-list">
//         {products.length > 0 && (
//           <div className="card-container">
//             {products.map((product) => (
//               <div key={product.id} className="product">
//                 <ItemCards
//                   product={product}
//                   addToCart={() => addToCart(product)} // Pass the product as an argument
//                 />
//               </div>
//             ))}
//           </div>
//         )}
//       </div>

//       {/* Render the CartComponent and pass the cart items */}
//       <CartComponent cart={cart} />
//     </div>
//   );
// }

// export default App;

// Inside App.js
import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/navBar';
import ItemCards from './components/Cards';
import CartComponent from './components/Cart';
// import Home from './components/Home';
import './App.css';

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const userAuthenticated = true;

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
      {/* <Home /> */}
      {userAuthenticated ? (
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
      ) : (
        <CartComponent cart={cart} />
      )}
    </div>
  );
}

export default App;
