const  { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Query {
    kbRegisters: [KbRegister]
    kbRegister(id: ID!): KbRegister
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
      id:Int!
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