require('dotenv').config();

export const config = {
  APP_SETTINGS: {
    PORT: process.env.PORT,
    NODE_ENV: process.env.NODE_ENV,
  },
};
