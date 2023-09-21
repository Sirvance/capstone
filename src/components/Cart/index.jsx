import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

function CartComponent({ cart }) {
  const [loading, setLoading] = useState(true); // State to track loading state

  useEffect(() => {
    // Simulate loading cart data
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []); // The empty dependency array ensures this effect runs once when the component mounts

  // Define cartContent as null by default
  let cartContent = null;

  // Check if cart is defined before accessing its properties
  if (cart && cart.length > 0) {
    cartContent = (
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            {item.name}
            (Quantity:
            {item.quantity}
            )
          </li>
        ))}
      </ul>
    );
  } else if (!loading) {
    cartContent = <p>Your cart is empty.</p>;
  }

  return (
    <div className="cart">
      <h1>CART</h1>
      {cartContent}
    </div>
  );
}

CartComponent.propTypes = {
  cart: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      quantity: PropTypes.number.isRequired,
      // Add any other required prop types for each item in the cart
    }),
  ).isRequired,
};

export default CartComponent;
