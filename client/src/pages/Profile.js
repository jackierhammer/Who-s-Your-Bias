import React, { useState, useEffect } from 'react';
import { Jumbotron, Container, Col, Form, Button, Card, CardColumns } from 'react-bootstrap';

import Auth from '../utils/auth';
// imports useMutation function
import { useMutation, useQuery, gql } from '@apollo/client';
import { GET_ME } from '../utils/queries';
import { REMOVE_BIAS } from '../utils/mutations';


const Profile = () => {
  const { loading, data } = useQuery(GET_ME);
  const userData = data?.me || [];

  const [removeBias, { error }] = useMutation(REMOVE_BIAS, {
    refetchQueries: [
      { query: GET_ME }
    ]
  });

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!Auth.loggedIn()) {
    return (
      <>
        <h1>Log in or create an account to see your profile!</h1>
      </>
    )
  }

  const handleRemoveBias = async (group, idol) => {
    removeBias({
      variables: {
        "groupName": group,
        "idol": idol
      }
    });
  }

  return (
    <>
      <h1>Profile</h1>
      <div class="cards">
        {userData.biases.map((bias) => {
          return (
            <>
              <p class="bias-card">{bias.groupName}: {bias.idol} <Button key={bias} className='btn remove' onClick={() => handleRemoveBias(bias.groupName, bias.idol)}>Remove</Button></p>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Profile;