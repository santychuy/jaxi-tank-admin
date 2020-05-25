import {
  createUser,
  getUsers,
  getUser,
  deleteUser,
  updateUser,
} from '../../controllers/user.controller';

import {
  createTask,
  deleteTask,
  getTask,
  getTasks,
  updateTask,
} from '../../controllers/task.controller';

import { NEW_USER } from '../subcriptions';

export const resolvers = {
  Query: {
    getUsers,
    getUser,
    getTask,
    getTasks,
  },

  Mutation: {
    createUser,
    deleteUser,
    updateUser,
    createTask,
    updateTask,
    deleteTask,
  },

  Subscription: {
    newUser: {
      subscribe: (_, __, { pubsub }) => pubsub.asyncIterator([NEW_USER]),
    },
  },
};
