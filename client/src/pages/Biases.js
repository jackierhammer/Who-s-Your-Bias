import React, { useState, useEffect } from 'react';
import { Jumbotron, Container, Col, Form, Button, Card, CardColumns } from 'react-bootstrap';

import Auth from '../utils/auth';
// imports useMutation function
import { useMutation } from '@apollo/react-hooks';

import groupData from '../data/groupData';

const Biases = () => {
  if (!Auth.loggedIn()) {
    return (
      <>
        <h1>Log in to choose your biases!</h1>
      </>
    )
  }

  return (
    <>
      <h1>Choose Your Biases</h1>
      <Container>
        <CardColumns>
          {groupData.map((group) => {
            return (
              <Card key={group.groupName} border='dark'>
                <Card.Body>
                  <Card.Title>{group.groupName}</Card.Title>
                  {group.activeMembers.map((member) => {
                    return (
                      <Button key={member} className='btn idol' onClick={() => console.log("you clicked the " + group.groupName + " button")}>
                        {member}
                      </Button>
                    )
                  })}
                </Card.Body>
              </Card>
            );
          })}
        </CardColumns>
      </Container>
    </>
  )
};

export default Biases;