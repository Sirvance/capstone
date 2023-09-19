// src/components/NavBar.js

import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link className="navbar-brand" to="/">Capstone</Link>
        {/* Link to Home */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
              {/* Link to Home */}
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/cart">Cart</Link>
              {/* Link to Cart */}
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/login">Login</Link>
              {/* Link to Login */}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;

// import React from 'react';
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';

// function NavBar() {
//   return (
//     <Navbar bg="light" data-bs-theme="light">
//       <Container>
//         <Navbar.Brand href="#capstone">Capstone</Navbar.Brand>
//         <Nav className="me-auto">
//           <Nav.Link href="#home">Home</Nav.Link>
//           {/* <Nav.Link href="#products">Products</Nav.Link> */}
//           <Nav.Link href="#cart">Cart</Nav.Link>
//           <Nav.Link href="#login">Login</Nav.Link>
//         </Nav>
//       </Container>
//     </Navbar>
//   );
// }

// export default NavBar;
