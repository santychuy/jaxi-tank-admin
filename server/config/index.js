require('dotenv').config();

export const config = {
  APP_SETTINGS: {
    PORT: process.env.PORT,
    NODE_ENV: process.env.NODE_ENV,
  },
  DB: {
    URI_LOCAL: process.env.MONGO_DB_URI_LOCAL,
    URI_PROD: process.env.MONGO_DB_URI_PROD,
  },
};
