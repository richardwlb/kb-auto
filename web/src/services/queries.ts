import { gql } from '@apollo/client';

export const GET_REGISTER = gql`
  query Registro($id: ID!) {
    kbRegister(id: $id){
      id
      title
      car_brand
      car_model
      car_year
      desc_problem
      desc_solution
    }
  }
`;

export const LIST_REGISTERS = gql`
  query Registros($search: String){
    kbRegisters(search: $search){
      id
      title
      car_brand
      car_model
      car_year
      desc_problem
      desc_solution
    }
  }
`;

export const SOME_REGISTERS = gql`
  query Registros($limit: Int!, $offset: Int!) {
    someKbRegisters(limit: $limit, offset: $offset) {
      id
      title
      car_brand
      car_model
      car_year
      desc_problem
      desc_solution
    }
  }
`;