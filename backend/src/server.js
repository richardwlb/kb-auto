const express = require('express');
const { ApolloServer } = require('apollo-server-express');

const typeDefs = require('./GraphQL/schema');
const resolvers = require('./GraphQL/resolvers');
const models = require('./models');

const server = new ApolloServer({ 
  typeDefs, 
  resolvers, 
  context: { models } 
});

const app = express();
server.applyMiddleware({ app });

// models.sequelize.authenticate();
models.sequelize.sync();

app.listen({ port: 3333 }, () => 
  console.log(`Server ready at http://localhost:3333${server.graphqlPath}`)
);

// app.get('/new', async (req, res) => {
//   // const { KbRegisters } = require('./models'); 
//   const result = await models.KbRegisters.create({
//     title: "Descarburar BMW",
//     car_brand: "BMW",
//     car_model: "X3",
//     car_year: "2009",
//     desc_problem: "Problema ocorre quando ligar o carro.",
//     desc_solution: "Ajustar parafusos com precisão",
//   });
//   res.send(result).status(201);
// });

