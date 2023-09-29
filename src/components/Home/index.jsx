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
