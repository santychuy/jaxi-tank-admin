import './database';
import next from 'next';
import { serverGraphql } from './app';
import { config } from './config';

const {
  APP_SETTINGS: { NODE_ENV },
} = config;

const dev = NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

// Express App
// app.prepare().then(serverExpress(dev, handle, port));
app.prepare().then(serverGraphql(handle));
