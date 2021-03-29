import { ApolloClient, InMemoryCache, gql } from '@apollo/client';

export const client = new ApolloClient({
  uri: 'http://localhost:3333/graphql',
  cache: new InMemoryCache(),
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