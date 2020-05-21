import { createUser, getUsers, getUser } from '../../controllers/user.controller';

export const resolvers = {
  Query: {
    getUsers,
    getUser,
  },

  Mutation: {
    createUser,
  },
};
