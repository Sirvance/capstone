import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/navBar';
import ItemCards from './components/Cards';
import './App.css';

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [selectedProducts, setSelectedProducts] = useState([]);

  // Define the addToCart function
  const addToCart = (product) => {
    // Implement the logic for adding items to the cart
    // You can add the selected product to the cart and selectedProducts state
    // to track which products are added to the cart
    const updatedCart = [...cart, { id: product.id, name: product.title, quantity: 1 }];
    setCart(updatedCart);
    setSelectedProducts([...selectedProducts, product.id]);
  };

  // Initialize cart from local storage when the component loads
  useEffect(() => {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  // Update local storage with the updated cart whenever it changes
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  // Fetch product data when the component loads
  useEffect(() => {
    const getAllData = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        setProducts(data);
      } catch (err) {
        console.error('Error fetching data:', err);
        // You can handle the error here, e.g., display an error message to the user
      }
    };
    getAllData();
  }, []);

  return (
    <div className="App">
      <NavBar />
      <div className="product-list">
        {products.length > 0 && (
          <div className="card-container">
            {products.map((product) => (
              <div key={product.id} className="product">
                <ItemCards
                  product={product}
                  addToCart={addToCart}
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;

// import React, { useState, useEffect } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import NavBar from './components/navBar';
// import ItemCards from './components/Cards';
// // import CartComponent from './components/Cart';
// // import Filter from './components/Productfilter'; // Import the Filter component
// import './App.css';

// function App() {
//   const [products, setProducts] = useState([]);
//   const [cart, setCart] = useState([]);
//   const [selectedProducts, setSelectedProducts] = useState([]);

//   const addToCart = (product) => {
//   // Define the addToCart function
//   // Implement the logic for adding items to the cart
//   // You can add the selected product to the cart and selectedProducts state
//   // to track which products are added to the cart
//   const updatedCart = [...cart, { id: product.id, name: product.title, quantity: 1 }];
//   setCart(updatedCart);
//   setSelectedProducts([...selectedProducts, product.id]);

//   // Initialize cart from local storage when the component loads
//   useEffect(() => {
//     const storedCart = localStorage.getItem('cart');
//     if (storedCart) {
//       setCart(JSON.parse(storedCart));
//     }
//   }, []);

//   // Update local storage with the updated cart whenever it changes
//   useEffect(() => {
//     localStorage.setItem('cart', JSON.stringify(cart));
//   }, [cart]);

//   // Fetch product data when the component loads
//   useEffect(() => {
//     const getAllData = async () => {
//       try {
//         const response = await fetch('https://fakestoreapi.com/products');
//         const data = await response.json();
//         setProducts(data);
//       } catch (err) {
//         console.error('Error fetching data:', err);
//         // You can handle the error here, e.g., display an error message to the user
//       }
//     };
//     getAllData();
//   }, []);

//   return (
//     <div className="App">
//       <NavBar />
//       {/* Render Filter and pass the addToCart function */}
//       {/* <Filter addToCart={addToCart} /> */}
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

// export default App;
