import './database';
import next from 'next';
import { serverExpress } from './app';
import { config } from './config';

const {
  APP_SETTINGS: { NODE_ENV, PORT },
} = config;

const port = parseInt(PORT, 10) || 4000;
const dev = NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(serverExpress(dev, handle, port));
