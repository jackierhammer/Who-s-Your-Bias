import React, { useState, useEffect } from 'react';
import { Jumbotron, Container, Col, Form, Button, Card, CardColumns } from 'react-bootstrap';

import Auth from '../utils/auth';
// imports useMutation function
import {useMutation} from '@apollo/react-hooks';

const Home = () => {
  // home page changes depending on whether or not user is logged in
  if (Auth.loggedIn()) {
    return (
      <>
        <h1>Home</h1>
        <h4>Click the links to choose your biases and manage your profile!</h4>
      </>
    )
  }
  
  return (
    <>
          <h1>Home</h1>
          <h4>Welcome to Who's Your Bias! Log in or create an account to start sharing your biases with friends!</h4>
    </>
  );
};

export default Home;