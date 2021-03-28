const express = require('express');
const casual = require('casual');
const cors = require('cors');
const { ApolloServer, gql, MockList } = require('apollo-server-express');

// const typeDefs = require('../GraphQL/schema');
// const resolvers = require('../GraphQL/resolvers');
// const models = require('./models');

const typeDefs = gql`
  type Query {
    hello: String
    resolved: String
    carros: [Carro]
  }
  type Carro {
    id: ID!
    title: String
    car_brand: String
    car_model: String
    car_year: Int
    desc_problem: String
  }
`;

const resolvers = {
  Query: {
    resolved: () => 'Resolved',
  },
};

casual.define('car_model', () => {
  return(
    casual.random_element(['Peugeot 206', 'Gol', '911'])
  )
})

const mocks = {
  Int: () => 6,
  Float: () => 22.1,
  // String: () => 'Hello',
  // carros: () => new MockList(9),
  // carros: () => new MockList(9, () => ({
  //   title: casual.title,
  //   car_model: casual.car_model,
  //   car_brand: 'X3 a a a',
  //   car_year: casual._year,
  // })),
  Carro: () => ({
    title: casual.title,
    car_model: casual.car_model,
    car_brand: 'X3 a a a',
    car_year: casual._year,
  })
};

const server = new ApolloServer({ 
  typeDefs, 
  resolvers, 
  // context: { models },
  // mocks: true
  mocks
});

const app = express();
app.use(express.json());
app.use(cors());
server.applyMiddleware({ app });

// models.sequelize.authenticate();
// models.sequelize.sync();

app.listen({ port: 3333 }, () => 
  console.log(`Server ready at http://localhost:3333${server.graphqlPath}`)
);


