import next from 'next';
import { serverExpress } from './app';
import { config } from './config';

const {
  APP_SETTINGS: { PORT, NODE_ENV },
} = config;

const port = parseInt(PORT, 10) || 4000;
const dev = NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

// Express App
app.prepare().then(serverExpress(dev, handle, port));
