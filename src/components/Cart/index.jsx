import React from 'react';
import PropTypes from 'prop-types';

function Cart({ cart }) {
  return (
    <div className="cart">
      <h1>CART</h1>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
}

Cart.propTypes = {
  cart: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default Cart;
