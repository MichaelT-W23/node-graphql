import express from 'express';
import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import { typeDefs, resolvers } from './schema.js';
import { AuthorAPI } from './datasources/authorAPI.js';
import { BookAPI } from './datasources/bookAPI.js'; 
import pkg from 'body-parser';
import cors from 'cors'; 

const { json } = pkg;

const server = new ApolloServer({
  typeDefs,
  resolvers
});

async function startServer() {
  await server.start();
  
  const app = express();
  
  app.use(cors()); 

  app.use(
    '/graphql',
    json(),
    expressMiddleware(server, {
      context: async () => ({
        dataSources: {
          authorAPI: new AuthorAPI(),
          bookAPI: new BookAPI(),
        },
      }),
    })
  );
  
  const PORT = 4000;

  app.listen(PORT, () => {
    console.log(`🚀 Server ready at http://localhost:${PORT}/graphql`);
  });
}

startServer().catch(error => console.error(error));