// import apollo
const { gql } = require('apollo-server-express');

// defines query and mutation types
const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    biases: [Bias]
  }
  type Bias {
    groupName: String
    idol: String
  }
  type Auth {
    token: ID!
    user: User
  }
  type Query {
    me: User
  }
  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addBias(groupName: String!, idol: String!): User
    removeBias(groupName: String!, idol: String!): User
  }
`;

module.exports = typeDefs;