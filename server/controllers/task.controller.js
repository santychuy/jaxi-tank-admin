import Task from '../models/Task';
import User from '../models/User';
import { cleanObject } from '../helper/cleanObject';

export const getTasks = async () => {
  try {
    return await Task.find();
  } catch (e) {
    return e;
  }
};

export const getTask = async (_, { id }) => {
  try {
    return await Task.findById(id);
  } catch (e) {
    return e;
  }
};

export const createTask = async (_, { title, description, user }) => {
  try {
    const task = new Task({ title, description, user });
    const taskSaved = await task.save();

    const userUpdate = await User.findById(user);
    const taskUser = userUpdate.tasks;
    taskUser.push(taskSaved.id);
    await userUpdate.save();

    return taskSaved;
  } catch (e) {
    return e;
  }
};

export const updateTask = async (_, { id, title, description, level, done }) => {
  try {
    const data = cleanObject({ title, description, level, done });
    return await Task.findByIdAndUpdate(id, data);
  } catch (e) {
    return e;
  }
};

export const deleteTask = async (_, { id }) => {
  try {
    return await Task.findByIdAndDelete(id);
  } catch (e) {
    return e;
  }
};
