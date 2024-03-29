const  { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Query {
    kbRegisters(search: String): [KbRegister]
    kbRegister(id: ID!): KbRegister
    someKbRegisters(limit: Int!, offset: Int!): [KbRegister]
  }
  type Mutation {
    createRegister(
      title: String!,
      car_brand: String!,
      car_model: String!,
      car_year: Int!,
      desc_problem: String!,
      desc_solution: String!,
    ): KbRegister
    deleteRegister(
      id:ID!
    ):String
    updateRegister(
      id: ID!,
      title: String!,
      car_brand: String!,
      car_model: String!,
      car_year: Int!,
      desc_problem: String!,
      desc_solution: String!,
    ): KbRegister
  }
  type KbRegister {
    id: ID!
    title: String
    car_brand: String
    car_model: String
    car_year: Int
    desc_problem: String
    desc_solution: String
  }
`;

module.exports = typeDefs;