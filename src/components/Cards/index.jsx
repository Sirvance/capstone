import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function ItemCards({ product, addToCart }) {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={product.image} alt={product.title} />
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>
          Price: $
          {product.price}
        </Card.Text>
        <Button variant="primary" onClick={toggleDetails}>
          {showDetails ? 'Hide Details' : 'Details'}
        </Button>
        {showDetails && (
          <div>
            <p>{product.description}</p>
            <Button variant="primary" onClick={addToCart}>
              Add to Cart
            </Button>
          </div>
        )}
      </Card.Body>
    </Card>
  );
}

// Define the expected prop types
ItemCards.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
  addToCart: PropTypes.func.isRequired,
};

export default ItemCards;

// import React from 'react';
// import PropTypes from 'prop-types';
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';

// function ItemCards({ product, addToCart }) {
//   return (
//     <Card style={{ width: '18rem' }}>
//       <Card.Img variant="top" src={product.image} alt={product.title} />
//       <Card.Body>
//         <Card.Title>{product.title}</Card.Title>
//         {/* <Card.Text>{product.description}</Card.Text> */}
//         <Card.Text>
//           Price: $
//           {product.price}
//         </Card.Text>
//         <Button variant="primary" onClick={addToCart}> Add to Cart </Button>
//       </Card.Body>
//     </Card>
//   );
// }

// // Define the expected prop types
// ItemCards.propTypes = {
//   product: PropTypes.shape({
//     title: PropTypes.string.isRequired,
//     description: PropTypes.string.isRequired,
//     price: PropTypes.number.isRequired,
//     image: PropTypes.string.isRequired,
//   }).isRequired,
//   addToCart: PropTypes.func.isRequired,
// };

// export default ItemCards;
