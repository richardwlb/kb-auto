import { ApolloClient, InMemoryCache, gql } from '@apollo/client';

export const client = new ApolloClient({
  uri: 'http://localhost:3333/graphql',
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          someKbRegisters: { //Query name
            keyArgs: false,
            // Concatenate what it has with what is coming
            merge(existing = [], incoming) {
              return [...existing, ...incoming];
            }
          }
        }
      }
    }
  }),
});

export const LIST_REGISTERS = gql`
  query Registros {
    kbRegisters{
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