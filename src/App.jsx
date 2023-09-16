import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/navBar';
import './App.css';

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getAllData = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        setProducts(data); // Use the entire data array
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
        {products.map((product) => (
          <div key={product.id} className="product">
            <img src={product.image} alt={product.title} />
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <p>
              Price: $
              {product.price}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
