import {
  createUser,
  getUsers,
  getUser,
  deleteUser,
  updateUser,
} from '../../controllers/user.controller';

export const resolvers = {
  Query: {
    getUsers,
    getUser,
  },

  Mutation: {
    createUser,
    deleteUser,
    updateUser,
  },
};
