import express, { json, urlencoded } from 'express';
import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';

export const serverExpress = (dev, handle, port) => {
  const server = express();

  server.use(helmet());
  server.use(json());
  server.use(urlencoded({ extended: true }));
  server.use(cors());
  if (dev) server.use(morgan('dev'));

  server.all('*', (req, res) => handle(req, res));

  server.listen(port, err => {
    err ? console.log(err) : console.log(`>> Ready on http://localhost:${port}`);
  });
};
