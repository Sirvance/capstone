// App.js
import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/navBar';
import ItemCards from './components/Cards';
import CartComponent from './components/Cart';
import Home from './components/Home';
// import Login from './components/Login';
import './App.css';

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const userAuthenticated = true;

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
      <Home />
      {userAuthenticated ? (
        <div className="product-list">
          {products.length > 0 && (
          <div className="card-container">
            {products.map((product) => (
              <div key={product.id} className="product">
                <ItemCards
                  product={product}
                  addToCart={() => addToCart(product)}
                />
              </div>
            ))}
          </div>
          )}
        </div>
      ) : (
        // <Login />
      <CartComponent cart={cart} />
      // {/* Pass the central cart state as a prop to the Cart component */}
      </div>
  );
}

export default App;

// import React, { useEffect, useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import NavBar from './components/navBar';
// import ItemCards from './components/Cards';
// import Cart from './components/Cart'; // Import the Cart component
// import Home from './components/Home';
// import './App.css';

// function App() {
//   const [products, setProducts] = useState([]);
//   const [cart, setCart] = useState([]);

//   const addToCart = (product) => {
//     // Check if the product is already in the cart
//     const existingProduct = cart.find((item) => item.id === product.id);

//     if (existingProduct) {
//       // If it's in the cart, increment the quantity
//       setCart(
//         cart.map((item) => (
//           item.id === product.id
//             ? { ...item, quantity: item.quantity + 1 }
//             : item
//         )),
//       );
//     } else {
//       // If it's not in the cart, add it with a quantity of 1
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
//       <Home />
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
//       <Cart cart={cart} />
//       {/* Pass the cart state to the Cart component */}
//     </div>
//   );
// }

// export default App;
