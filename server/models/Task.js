import { Schema, model } from 'mongoose';

const taskSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  level: {
    type: Number,
    default: 1,
  },
  done: {
    type: Boolean,
    default: false,
  },
  user: {
    type: String,
    required: true,
  },
});

export default model('Task', taskSchema, 'tasks');
