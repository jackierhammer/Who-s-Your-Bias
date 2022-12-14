import gql from 'graphql-tag';

// creates mutation for logging in existing users
export const LOGIN_USER = gql`
    mutation loginUser($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            token
            user {
                _id
            }
        }
    }
`;

// creates mutation for creating new users
export const ADD_USER = gql`
    mutation addUser($username: String!, $email: String!, $password: String!) {
        addUser(username: $username, email: $email, password: $password) {
            token
            user {
                _id
                username
            }
        }
    }
`;

export const ADD_BIAS = gql`
mutation AddBias($groupName: String!, $idol: String!) {
    addBias(groupName: $groupName, idol: $idol) {
      biases {
        groupName
        idol
      }
    }
  }
`;

export const REMOVE_BIAS = gql`
mutation RemoveBias($groupName: String!, $idol: String!) {
    removeBias(groupName: $groupName, idol: $idol) {
      biases {
        groupName
        idol
      }
    }
  }
`;