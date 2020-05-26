import { connect } from 'mongoose';

import { config } from './config';

const {
  APP_SETTINGS: { NODE_ENV },
  DB: { URI_LOCAL, URI_PROD },
} = config;

(async () => {
  const uri = NODE_ENV === 'development' ? URI_LOCAL : URI_PROD;
  try {
    await connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    });
    console.log('Database connected!');
  } catch (e) {
    console.log(e);
  }
})();
