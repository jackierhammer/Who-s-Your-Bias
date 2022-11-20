import React, { useState, useEffect } from 'react';
import { Jumbotron, Container, Col, Form, Button, Card, CardColumns } from 'react-bootstrap';

import Auth from '../utils/auth';
// imports useMutation function
import {useMutation} from '@apollo/react-hooks';

const Explore = () => {
  return (
    <>
      <Jumbotron fluid className='text-light bg-dark'>
        <Container>
          <h1>Explore</h1>
        </Container>
      </Jumbotron>
    </>
  );
};

export default Explore;