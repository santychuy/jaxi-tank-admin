import User from '../models/User';

export const getUsers = async () => {
  try {
    return await User.find();
  } catch (e) {
    return e;
  }
};

export const getUser = async (_, { id }) => {
  try {
    return await User.findById(id);
  } catch (e) {
    return e;
  }
};

export const createUser = async (_, { name, email, username, password }) => {
  try {
    const user = new User({ name, email, password, username });
    return await user.save();
  } catch (e) {
    return e;
  }
};
