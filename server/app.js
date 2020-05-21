import { GraphQLServer } from 'graphql-yoga';
import { parse } from 'url';

import GraphQLConfig from './config/graphqlServer';
import { typeDefs } from './graphql/typeDefs';
import { resolvers } from './graphql/resolvers';
import { initMiddlewares } from './middlewares';

export const serverGraphql = handle => {
  const server = new GraphQLServer({
    typeDefs,
    resolvers,
  });

  const { express } = server;
  initMiddlewares(express);

  server.express.get('/', (req, res) => {
    const parsedUrl = parse(req.url, true);
    handle(req, res, parsedUrl);
  });
  // server.express.all('*', (req, res) => handle(req, res));

  server.start(GraphQLConfig, ({ port }) => {
    console.log(`Server on: http://localhost:${port}`);
  });
};
