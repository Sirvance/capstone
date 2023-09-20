import React, { useEffect } from 'react';

const API = () => {
  useEffect(() => {
    // Get all products
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((products) => {
        console.log('All Products:', products);
      });

    // Get a single product by ID
    fetch('https://fakestoreapi.com/products/1')
      .then((res) => res.json())
      .then((product) => {
        console.log('Single Product:', product);
      });

    // Limit results to 5 products
    fetch('https://fakestoreapi.com/products?limit=5')
      .then((res) => res.json())
      .then((limitedProducts) => {
        console.log('Limited Products:', limitedProducts);
      });

    // Sort products in descending order
    fetch('https://fakestoreapi.com/products?sort=desc')
      .then((res) => res.json())
      .then((sortedProducts) => {
        console.log('Sorted Products (Descending):', sortedProducts);
      });

    // Get all categories
    fetch('https://fakestoreapi.com/products/categories')
      .then((res) => res.json())
      .then((categories) => {
        console.log('All Categories:', categories);
      });

    // Get products in a specific category (e.g., 'jewelery')
    fetch('https://fakestoreapi.com/products/category/jewelery')
      .then((res) => res.json())
      .then((categoryProducts) => {
        console.log('Category Products:', categoryProducts);
      });

    // Add a new product
    fetch('https://fakestoreapi.com/products', {
      method: 'POST',
      body: JSON.stringify({
        title: 'test product',
        price: 13.5,
        description: 'lorem ipsum set',
        image: 'https://i.pravatar.cc',
        category: 'electronic',
      }),
    })
      .then((res) => res.json())
      .then((newProduct) => {
        console.log('New Product:', newProduct);
      });

    // Update a product (example with PUT)
    fetch('https://fakestoreapi.com/products/7', {
      method: 'PUT',
      body: JSON.stringify({
        title: 'updated product',
        price: 15.99,
        description: 'updated description',
      }),
    })
      .then((res) => res.json())
      .then((updatedProduct) => {
        console.log('Updated Product (PUT):', updatedProduct);
      });

    // Update a product (example with PATCH)
    fetch('https://fakestoreapi.com/products/7', {
      method: 'PATCH',
      body: JSON.stringify({
        price: 14.99,
      }),
    })
      .then((res) => res.json())
      .then((updatedProduct) => {
        console.log('Updated Product (PATCH):', updatedProduct);
      });

    // Delete a product
    fetch('https://fakestoreapi.com/products/6', {
      method: 'DELETE',
    })
      .then((res) => res.json())
      .then((deletedProduct) => {
        console.log('Deleted Product:', deletedProduct);
      });

    // Repeat similar fetch requests for Cart and Users APIs

    // Cart API examples
    // ...

    // Users API examples
    // ...

    // Authentication API examples (User login)
    // ...
  }, []);

  return (
    <div>
      {/* Your page content */}
    </div>
  );
};

export default API;
