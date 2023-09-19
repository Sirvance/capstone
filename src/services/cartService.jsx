// Initialize an empty cart
const cart = [];

// Function to add a product to the cart
export const addToCart = (product) => {
  cart.push(product);
};

// Function to get the current cart
export const getCart = () => cart;
