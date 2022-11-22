import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container, Modal, Tab } from 'react-bootstrap';

// imports auth
import Auth from '../utils/auth';

// creates navbar
const AppNavbar = () => {
  // set modal display state
  const [showModal, setShowModal] = useState(false);

  return (
    <>
          <h2>Who's Your Bias?</h2>
          <Navbar>
              <Nav.Link as={Link} to='/'>
                Explore
              </Nav.Link>
              {Auth.loggedIn() ? (
                <>
                  <Nav.Link as={Link} to='/biases'>
                    Choose Your Biases
                  </Nav.Link>
                  <Nav.Link as={Link} to='/profile'>
                    See Your Profile
                  </Nav.Link>
                  <Nav.Link onClick={Auth.logout}>Logout</Nav.Link>
                </>
              ) : (
                <>
                <Nav.Link as={Link} to='/login'>Login</Nav.Link>
                <Nav.Link as={Link} to='/signup'>Sign Up</Nav.Link>
                </>
              )}
      </Navbar>
    </>
  );
};

export default AppNavbar;