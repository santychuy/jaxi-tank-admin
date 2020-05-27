import express, { json, urlencoded } from 'express';
import helmet from 'helmet';
import morgan from 'morgan';
import cors from 'cors';

import { initGraphql } from './graphql';

export const serverExpress = (dev, handle, port) => {
  const server = express();

  server.use(helmet());
  server.use(cors());
  server.use(json());
  server.use(urlencoded({ extended: true }));
  if (dev) server.use(morgan('dev'));

  const app = initGraphql(server);

  app.all('*', (req, res) => handle(req, res));

  /* app.createServer((req, res) => {
    if (req.url === '*') {
      handle(req, res);
    }
  }); */

  app.listen(port, err => {
    err
      ? console.log(err)
      : console.log(
          `>> Ready on http://localhost:${port}\n>> Graphql on http://localhost:${port}/graphql`
        );
  });
};
