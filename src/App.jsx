import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/navBar';
import ItemCards from './components/Cards';
import Cart from './components/Cart'; // Import the Cart component
import './App.css';

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    // Check if the product is already in the cart
    const existingProduct = cart.find((item) => item.id === product.id);

    if (existingProduct) {
      // If it's in the cart, increment the quantity
      setCart(
        cart.map((item) => (
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )),
      );
    } else {
      // If it's not in the cart, add it with a quantity of 1
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
      <Cart cart={cart} />
      {/* Pass the cart state to the Cart component */}
    </div>
  );
}

export default App;
// import React from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import NavBar from './components/navBar';
// import Home from './pages/Home';
// import Cart from './pages/Cart';
// import Login from './pages/Login';

// function App() {
//   return (
//     <Router>
//       <div className="App">
//         <NavBar />
//         <Switch>
//           <Route path="/" exact component={Home} />
//           <Route path="/cart" component={Cart} />
//           <Route path="/login" component={Login} />
//         </Switch>
//       </div>
//     </Router>
//   );
// }

// export default App;
