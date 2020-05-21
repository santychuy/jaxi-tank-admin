import morgan from 'morgan';
import helmet from 'helmet';

import { config } from '../config';

const {
  APP_SETTINGS: { NODE_ENV },
} = config;

export const initMiddlewares = express => {
  express.use(helmet());
  if (NODE_ENV !== 'production') express.use(morgan('dev'));
};
