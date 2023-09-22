import React, { useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleLogin = () => {
    // Fetch the list of users
    fetch('https://fakestoreapi.com/users')
      .then((res) => res.json())
      .then((data) => {
        // Find the user with the provided username and password
        const foundUser = data.find((u) => u.username === username && u.password === password);
        if (foundUser) {
          // Login successful, set the user data
          // Store user authentication status in localStorage
          localStorage.setItem('loggedInUser', JSON.stringify(foundUser));
          setError(null);
        } else {
          // Login failed, display an error message
          setError('Login failed. Please check your credentials.');
        }
      });
  };

  const handleLogout = () => {
    // Clear the user data from localStorage and reset the user state
    localStorage.removeItem('loggedInUser');
  };

  // Check if the user is already logged in
  const storedUser = localStorage.getItem('loggedInUser');
  const loggedInUser = storedUser ? JSON.parse(storedUser) : null;

  return (
    <Navbar className="bg-body-tertiary justify-content-between">
      <Link to="/">Home</Link>
      <Form inline>
        <InputGroup>
          <Form.Control
            placeholder="Username"
            aria-label="Username"
            aria-describedby="basic-addon1"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </InputGroup>
      </Form>
      <Form inline>
        <Row>
          <Col xs="auto">
            <Form.Control
              type="password"
              placeholder="Password"
              className="mr-sm-2"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Col>
          <Col xs="auto">
            {!loggedInUser ? (
              <Button type="button" onClick={handleLogin}>
                Login
              </Button>
            ) : (
              <Button type="button" onClick={handleLogout}>
                Logout
              </Button>
            )}
          </Col>
        </Row>
      </Form>
      {loggedInUser && (
        <div>
          <p>
            Welcome,
            {loggedInUser.name.firstname}
            !
          </p>
          {/* Display user details here */}
        </div>
      )}
      {error && <p className="text-danger">{error}</p>}
    </Navbar>
  );
}

export default LoginForm;

// import React, { useState } from 'react';
// import Navbar from 'react-bootstrap/Navbar';
// import Form from 'react-bootstrap/Form';
// import Button from 'react-bootstrap/Button';
// import InputGroup from 'react-bootstrap/InputGroup';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import { Link } from 'react-router-dom';

// function LoginForm() {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [user, setUser] = useState(null);
//   const [error, setError] = useState(null);

//   const handleLogin = () => {
//     // Fetch the list of users
//     fetch('https://fakestoreapi.com/users')
//       .then((res) => res.json())
//       .then((data) => {
//         // Find the user with the provided username and password
//         const foundUser = data.find((u) => u.username === username && u.password === password);
//         if (foundUser) {
//           // Login successful, set the user data
//           setUser(foundUser);
//           setError(null);
//           // Store user authentication status in localStorage
//           localStorage.setItem('loggedInUser', JSON.stringify(foundUser));
//         } else {
//           // Login failed, display an error message
//           setUser(null);
//           setError('Login failed. Please check your credentials.');
//         }
//       });
//     //   .catch((error) => {
//     //     console.error('Error fetching user data:', error);
//     //     setError('An error occurred while logging in.');
//     //   });
//   };

//   return (
//     <Navbar className="bg-body-tertiary justify-content-between">
//       <Link to="/">Home</Link>
//       <Form inline>
//         <InputGroup>
//           <Form.Control
//             placeholder="Username"
//             aria-label="Username"
//             aria-describedby="basic-addon1"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//           />
//         </InputGroup>
//       </Form>
//       <Form inline>
//         <Row>
//           <Col xs="auto">
//             <Form.Control
//               type="password"
//               placeholder="Password"
//               className="mr-sm-2"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//             />
//           </Col>
//           <Col xs="auto">
//             <Button type="button" onClick={handleLogin}>
//               Login
//             </Button>
//             ) : (
//                 <Button type="button" onClick={handleLogout}>
//                 Logout
//               </Button>
//             )}
//           </Col>
//         </Row>
//       </Form>
//       {user && (
//         <div>
//           <p>
//             Welcome,
//             {user.name.firstname}
//             !
//           </p>
//           {/* Display user details here */}
//         </div>
//       )}
//       {error && <p className="text-danger">{error}</p>}
//     </Navbar>
//   );
// }

// export default LoginForm;
