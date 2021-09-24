import { gql } from '@apollo/client';

export const NEW_REGISTER = gql `
  mutation CriaRegistro(
    $title: String!, 
    $car_brand: String!,
    $car_model: String!,
    $car_year: Int!,
    $desc_problem: String!,
    $desc_solution: String!
  ){
    createRegister(
      title: $title, 
      car_brand: $car_brand,
      car_model: $car_model,
      car_year: $car_year,
      desc_problem: $desc_problem,
      desc_solution: $desc_solution,
    ){
      id
    }
  }
`;

export const UPDATE_REGISTER = gql `
  mutation AtualizaRegistro(
    $id: ID!,
    $title: String!, 
    $car_brand: String!,
    $car_model: String!,
    $car_year: Int!,
    $desc_problem: String!,
    $desc_solution: String!
  ){
    updateRegister(
      id: $id,
      title: $title, 
      car_brand: $car_brand,
      car_model: $car_model,
      car_year: $car_year,
      desc_problem: $desc_problem,
      desc_solution: $desc_solution,
    ){
      __typename
    }
  }
`;

export const DELETE_REGISTER = gql `
  mutation DeletaRegistro(
    $id: ID!
  ){
    deleteRegister(id: $id)
  }
`;
