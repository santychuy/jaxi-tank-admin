// import http from 'http';
import { ApolloServer, PubSub } from 'apollo-server-express';

import { typeDefs } from './typeDefs';
import { resolvers } from './resolvers';

const pubsub = new PubSub();

export const initGraphql = app => {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({ req, res }) => ({ req, res, pubsub }),
  });

  server.applyMiddleware({ app });
  /* const httpServer = http.createServer(app);
  server.installSubscriptionHandlers(httpServer);
  return httpServer; */
  return app;
};
