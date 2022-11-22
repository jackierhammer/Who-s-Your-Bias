import React, { useState, useEffect } from 'react';
import { Jumbotron, Container, Col, Form, Button, Card, CardColumns } from 'react-bootstrap';

import Auth from '../utils/auth';
// imports useMutation function
import { GET_ME } from '../utils/queries';
import {useMutation, useQuery} from '@apollo/react-hooks';

const Profile = () => {
  const { loading, data} = useQuery(GET_ME);
  const userData = data?.me || [];

  
  
  return (
    <>
          <h1>Profile</h1>

          <h2>
          {userData.biases.length
            ? `Viewing ${userData.biases.length} saved ${userData.biases.length === 1 ? 'bias' : 'biases'}:`
            : 'You have no saved biases!'}
        </h2>
        <CardColumns>
          {userData.biases.map((bias) => {
            return (
                <Card.Body>
                  <Card.Title>{bias}</Card.Title>
                </Card.Body>
            );
          })}
        </CardColumns>
    </>
  );
};

export default Profile;