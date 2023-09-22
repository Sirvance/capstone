// import React from 'react';
// import PropTypes from 'prop-types';
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
// import { addToCart } from '../../services/cartService'; // Import addToCart function

// function ProductList({ products }) {
//   const handleAddToCart = (product) => {
//     addToCart(product); // Call the addToCart function
//   };

//   return (
//     <div className="product-list">
//       {products.map((product) => (
//         <Card key={product.id} style={{ width: '18rem' }}>
//           <Card.Img variant="top" src={product.image} />
//           <Card.Body>
//             <Card.Title>{product.title}</Card.Title>
//             <Card.Text>
//               Price: $
//               {product.price}
//             </Card.Text>
//             <Button variant="primary" onClick={() => handleAddToCart(product)}>
//               Add to Cart
//             </Button>
//           </Card.Body>
//         </Card>
//       ))}
//     </div>
//   );
// }

// ProductList.propTypes = {
//   products: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.number.isRequired,
//       image: PropTypes.string.isRequired,
//       title: PropTypes.string.isRequired,
//       description: PropTypes.string.isRequired,
//       // Add other prop types as needed
//     }),
//   ).isRequired,
// };

// export default ProductList;

// import React, { useState } from 'react';
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
// import PropTypes from 'prop-types';
// // import { addToCart } from '../services/cartService';

// function ProductList({ products }) {
//   const [showDescription, setShowDescription] = useState(false);

//   const toggleDescription = () => {
//     setShowDescription(!showDescription);
//   };

//   return (
//     <div className="product-list">
//       {products.map((product) => (
//         <Card key={product.id} style={{ width: '18rem' }}>
//           <Card.Img variant="top" src={product.image} />
//           <Card.Body>
//             <Card.Title>{product.title}</Card.Title>
//             {showDescription && <Card.Text>{product.description}</Card.Text>}
//             <Button variant="primary" onClick={toggleDescription}>
//               {showDescription ? 'Hide Description' : 'Show Description'}
//             </Button>
//           </Card.Body>
//         </Card>
//       ))}
//     </div>
//   );
// }

// ProductList.propTypes = {
//   products: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.number.isRequired,
//       image: PropTypes.string.isRequired,
//       title: PropTypes.string.isRequired,
//       description: PropTypes.string.isRequired,
//       // Add other prop types as needed
//     }),
//   ).isRequired,
// };

// export default ProductList;

// /* eslint-disable import/no-extraneous-dependencies */
// import React from 'react';
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
// import PropTypes from 'prop-types';

// function ProductList({ products }) {
//   const [showDescription, setShowDescription] = useState(false);

//   const toggleDescription = () => {
//     setShowDescription(!showDescription);
//   }
//   return (
//     <div className="product-list">
//       {products.map((product) => (
//         <Card key={product.id} style={{ width: '18rem' }}>
//           <Card.Img variant="top" src={product.image} />
//           <Card.Body>
//             <Card.Title>{product.title}</Card.Title>
//             {showDescription && <Card.Text>{product.description}</Card.Text>}
//             {/* <Card.Text>{product.description}</Card.Text> */}
//             <Button variant="primary" onClick={toggleDescription}
//             {showDescription ? 'Hide Description' : 'Show Description'}
//            </Button>
//           </Card.Body>
//         </Card>
//       ))}
//     </div>
//   );
// }

// ProductList.propTypes = {
//   products: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.number.isRequired,
//       image: PropTypes.string.isRequired,
//       title: PropTypes.string.isRequired,
//       description: PropTypes.string.isRequired,
//       // Add other prop types as needed
//     }),
//   ).isRequired,
// };

// export default ProductList;
