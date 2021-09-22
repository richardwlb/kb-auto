import { ApolloClient, InMemoryCache } from '@apollo/client';

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