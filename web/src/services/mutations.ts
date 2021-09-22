import { gql } from '@apollo/client';

export const NEW_REGISTER = gql `
  mutation CriaRegistro(
    $title: String!, 
    $brand: String!,
    $model: String!,
    $year: Int!,
    $problem: String!,
    $solution: String!
  ){
    createRegister(
      title: $title, 
      car_brand: $brand,
      car_model: $model,
      car_year: $year,
      desc_problem: $problem,
      desc_solution: $solution,
    ){
      id
    }
  }
`;
