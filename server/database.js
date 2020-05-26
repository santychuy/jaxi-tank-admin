import { connect } from 'mongoose';

import { config } from './config';

// Remove comments when its a valid URL of DB Production
/* const {
  APP_SETTINGS: { NODE_ENV },
  DB: { URI_LOCAL, URI_PROD },
} = config; */

const {
  DB: { URI_LOCAL },
} = config;

(async () => {
  // const uri = NODE_ENV === 'development' ? URI_LOCAL : URI_PROD;
  try {
    await connect(URI_LOCAL, {
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
