import React, { useEffect, useState } from 'react';

const [isAuthenticated, setIsAuthenticated] = useState(false);
const [authToken, setAuthToken] = useState('');

const handleUserLogin = () => {
    // Define the user login credentials
    const credentials = {
      username: 'mor_2314',
      password: '83r5^_',
    };
  
    // Make a POST request to the login API endpoint
    fetch('https://fakestoreapi.com/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Login failed');
        }
        return response.json(); // Parse the JSON response
      })
      .then((data) => {
        // Set the authentication token and update the authentication status
        setAuthToken(data.token);
        setIsAuthenticated(true);
      })
      .catch((error) => {
        console.error('Error logging in:', error);
        // Handle login error here
      });
  };
  
  return (
    <div className="App">
      {/* ... other components and content ... */}
      {isAuthenticated ? (
        <p>User is authenticated. Display authenticated content here.</p>
      ) : (
        <button onClick={handleUserLogin}>Login</button>
      )}
      {/* ... other components ... */}
    </div>
  );
  
  


// import React, { useState } from 'react';

// function Login() {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState(null);

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Prepare the login data
//     const loginData = {
//       username,
//       password,
//     };

//     try {
//       const response = await fetch('https://fakestoreapi.com/auth/login', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(loginData),
//       });

//       if (!response.ok) {
//         throw new Error('Login failed');
//       }

//       const data = await response.json();

//       // Assuming the API provides an access token
//       const accessToken = data.accessToken;

//       // Store the access token securely (e.g., in local storage)
//       localStorage.setItem('accessToken', accessToken);

//       // Redirect the user or set an authenticated state in your app
//     } catch (err) {
//       setError('Login failed. Please check your credentials.');
//     }
//   };

//   return (
//     <div>
//       <h1>Login</h1>
//       {error && <p>{error}</p>}
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label htmlFor="username">Username/Email:</label>
//           <input
//             type="text"
//             id="username"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//           />
//         </div>
//         <div>
//           <label htmlFor="password">Password:</label>
//           <input
//             type="password"
//             id="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//         </div>
//         <button type="submit">Login</button>
//       </form>
//     </div>
//   );
// }

// export default Login;
