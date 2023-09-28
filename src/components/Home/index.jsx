// import React, { useState } from 'react';
// import Filter from '../Productfilter';

// function Home() {
// const [selectedCategory, setSelectedCategory] = useState('All'); // State to track the selected
//   const [items, setItems] = useState([]); // State to store filtered items

//   // Function to update the selected category
//   const handleCategoryChange = (category) => {
//     setSelectedCategory(category);
//   };

//   return (
//     <div className="home">
//       <h1>Welcome to our online store!</h1>
//       <Filter onCategoryChange={handleCategoryChange} />
//       {/* Pass the callback function */}
//       {/* Display items based on the selected category */}
//       {items.map((item) => (
//         <div key={item.id}>
//           <h4>{item.title}</h4>
//           <p>{item.description}</p>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default Home;

import React from 'react';

function Home() {
  // Check if the user is already logged in
  const storedUser = localStorage.getItem('loggedInUser');

  // You can parse the storedUser JSON if it exists
  const user = storedUser ? JSON.parse(storedUser) : null;

  return (
    <div className="home">
      <h1>Welcome to our online store!</h1>
      {user && (
        <p>
          Welcome,
          {user.name.firstname}
          {user.name.lastname}
          !
        </p>
      )}
      {/* Add any content or components specific to your home page here */}
    </div>
  );
}

export default Home;
