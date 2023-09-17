import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/navBar';
import ItemCards from './components/Cards';
import './App.css';

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  useEffect(() => {
    const getAllData = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        setProducts(data); // Use the entire data array
      } catch (err) {
        console.error(err);
        // console.log(products);
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
                <ItemCards product={product} addToCart={() => addToCart(product)} />
                {/* <img src={product.image} alt={product.title} />
                <h3>{product.title}</h3>
                <p>{product.description}</p>
                <p>
                  Price: $
                  {product.price}
                </p>
                <ItemCards /> */}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
