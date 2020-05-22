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
};
