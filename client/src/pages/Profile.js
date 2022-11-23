import React, { useState, useEffect } from 'react';
import { Jumbotron, Container, Col, Form, Button, Card, CardColumns } from 'react-bootstrap';

// imports useMutation function
import { useMutation, useQuery, gql } from '@apollo/client';
import { GET_ME } from '../utils/queries';

const Profile = () => {
  const { loading, data} = useQuery(GET_ME);
  const userData = data?.me || [];
  
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
          <h1>Profile</h1>

          <h2>
          {console.log(userData.biases)}
        </h2>
        <CardColumns>
          {userData.biases.map((bias) => {
            return (
                <Card.Body>
                  <Card.Title>{bias.groupName}</Card.Title>
                  <Card.Text>{bias.idol}</Card.Text>
                </Card.Body>
            );
          })}
        </CardColumns>
    </>
  );
};

export default Profile;