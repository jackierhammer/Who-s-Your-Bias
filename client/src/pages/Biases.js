import React, { useState, useEffect } from 'react';
import { Jumbotron, Container, Col, Form, Button, Card, CardColumns } from 'react-bootstrap';

import Auth from '../utils/auth';
// imports useMutation function
import { useMutation, useQuery, gql } from '@apollo/client';
import { GET_ME } from '../utils/queries';

import groupData from '../data/groupData';
import { ADD_BIAS } from '../utils/mutations';

const Biases = () => {
  const { loading, data } = useQuery(GET_ME);

  const userData = data?.me || [];
  const [addBias, { error }] = useMutation(ADD_BIAS, {
    refetchQueries: [
      { query: GET_ME }
    ]
  });

  if (!Auth.loggedIn()) {
    return (
      <>
        <h1>Log in to choose your biases!</h1>
      </>
    )
  }

  const handleSaveBias = async (group, idol) => {
    addBias({
      variables: {
        "groupName": group,
        "idol": idol
      }
    });
  }

  return (
    <>
      <h1>Choose Your Biases</h1>
      <div class="cards">
        {groupData.map((group) => {
          return (
            <div class='bias-card'>
              <h2>{group.groupName}</h2>
              {group.activeMembers.map((member) => {
                return (
                  <Button key={member} className='btn idol' onClick={() => handleSaveBias(group.groupName, member)}>
                    {member}
                  </Button>
                )
              })}
            </div>
          );
        })}
      </div>

    </>
  )
};

export default Biases;