import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Dropdown from 'react-bootstrap/Dropdown';
import ItemCards from '../Cards';

function Filter({ products }) {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    // Fetch categories when the component mounts
    fetch('https://fakestoreapi.com/products/categories')
      .then((response) => response.json())
      .then((data) => {
        setCategories(data);
      })
      .catch((error) => {
        console.error('Error fetching categories:', error);
      });
  }, []);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div>
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Filter
        </Dropdown.Toggle>

        <Dropdown.Menu>
          {/* Map through the categories and generate dropdown items */}
          {categories.map((category) => (
            <Dropdown.Item
              key={category}
              href={`#${category}`}
              onClick={() => handleCategoryClick(category)} // Handle category click
            >
              {category}
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>

      {products && products.length > 0 && (
        <div className="product-list">
          {/* Filter and display item cards based on the selected category */}
          {products.map((product) => {
            if (!selectedCategory || product.category === selectedCategory) {
              return (
                <div key={product.id} className="product">
                  {/* Render your item card component here */}
                  <ItemCards product={product} />
                </div>
              );
            }
            return null; // Hide item cards that don't match the selected category
          })}
        </div>
      )}
    </div>
  );
}

// Define the expected prop types using PropTypes.arrayOf
Filter.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({
    // Define the expected shape of each product object
    id: PropTypes.number.isRequired,
    category: PropTypes.string.isRequired,
    // Add other prop type validations for your product object properties
  })).isRequired,
};

export default Filter;

// import React, { useState, useEffect } from 'react';
// import PropTypes from 'prop-types';
// import Dropdown from 'react-bootstrap/Dropdown';
// import ItemCards from '../Cards';

// function Filter({ products }) {
//   const [categories, setCategories] = useState([]);
//   const [selectedCategory, setSelectedCategory] = useState(null);

//   useEffect(() => {
//     // Fetch categories when the component mounts
//     fetch('https://fakestoreapi.com/products/categories')
//       .then((response) => response.json())
//       .then((data) => {
//         setCategories(data);
//       })
//       .catch((error) => {
//         console.error('Error fetching categories:', error);
//       });
//   }, []);

//   const handleCategoryClick = (category) => {
//     setSelectedCategory(category);
//   };

//   return (
//     <div>
//       <Dropdown>
//         <Dropdown.Toggle variant="success" id="dropdown-basic">
//           Filter
//         </Dropdown.Toggle>

//         <Dropdown.Menu>
//           {/* Map through the categories and generate dropdown items */}
//           {categories.map((category) => (
//             <Dropdown.Item
//               key={category}
//               href={`#${category}`}
//               onClick={() => handleCategoryClick(category)} // Handle category click
//             >
//               {category}
//             </Dropdown.Item>
//           ))}
//         </Dropdown.Menu>
//       </Dropdown>

//       {products && products.length > 0 && (
//       <div className="product-list">
//         {/* Filter and display item cards based on the selected category */}
//         {products.map((product) => {
//           if (!selectedCategory || product.category === selectedCategory) {
//             return (
//               <div key={product.id} className="product">
//                 {/* Render your item card component here */}
//                 <ItemCards product={product} />
//               </div>
//             );
//           }
//           return null; // Hide item cards that don't match the selected category
//         })}
//       </div>
// )}

// // Define the expected prop types using PropTypes.arrayOf
// Filter.propTypes = {
//   products: PropTypes.arrayOf(PropTypes.shape({
//     // Define the expected shape of each product object
//     id: PropTypes.number.isRequired,
//     category: PropTypes.string.isRequired,
//     // Add other prop type validations for your product object properties
//   })).isRequired,
// };

// export default Filter;

// import React, { useState, useEffect } from 'react';
// import Dropdown from 'react-bootstrap/Dropdown';

// function Filter() {
//   const [categories, setCategories] = useState([]);

//   useEffect(() => {
//     // Fetch categories when the component mounts
//     fetch('https://fakestoreapi.com/products/categories')
//       .then((response) => response.json())
//       .then((data) => {
//         setCategories(data);
//       })
//       .catch((error) => {
//         console.error('Error fetching categories:', error);
//       });
//   }, []);

//   return (
//     <Dropdown>
//       <Dropdown.Toggle variant="success" id="dropdown-basic">
//         Filter
//       </Dropdown.Toggle>

//       <Dropdown.Menu>
//         {/* Map through the categories and generate dropdown items */}
//         {categories.map((category) => (
//           <Dropdown.Item key={category} href={`#${category}`}>
//             {category}
//           </Dropdown.Item>
//         ))}
//       </Dropdown.Menu>
//     </Dropdown>
//   );
// }

// export default Filter;

// import React from 'react';
// import Dropdown from 'react-bootstrap/Dropdown';

// function Filter() {
//   return (
//     <Dropdown>
//       <Dropdown.Toggle variant="success" id="dropdown-basic">
//         Filter
//       </Dropdown.Toggle>

//       <Dropdown.Menu>
//         <Dropdown.Item href="#/action-1">Clothing</Dropdown.Item>
//         <Dropdown.Item href="#/action-2">Jewelry</Dropdown.Item>
//         <Dropdown.Item href="#/action-3">Electronics</Dropdown.Item>
//       </Dropdown.Menu>
//     </Dropdown>
//   );
// }

// export default Filter;
