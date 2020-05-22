import { config } from './index';

const {
  APP_SETTINGS: { PORT, NODE_ENV },
} = config;

export default {
  playground: NODE_ENV === 'production' ? false : '/playground',
  endpoint: '/graphql',
  port: PORT,
};
