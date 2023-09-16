/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import PropTypes from 'prop-types';

function ProductList({ products }) {
  return (
    <div className="product-list">
      {products.map((product) => (
        <Card key={product.id} style={{ width: '18rem' }}>
          <Card.Img variant="top" src={product.image} />
          <Card.Body>
            <Card.Title>{product.title}</Card.Title>
            <Card.Text>{product.description}</Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

ProductList.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      // Add other prop types as needed
    }),
  ).isRequired,
};

export default ProductList;
