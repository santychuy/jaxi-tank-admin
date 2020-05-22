/* eslint-disable */
import { Schema, model } from 'mongoose';
import bcrypt from 'bcrypt';

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: {
      message: 'Este E-mail ya está registrado',
      validator: function (v) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(v).toLowerCase());
      },
    },
  },
  password: {
    type: String,
    required: true,
  },
  tasks: [String],
});

// Encrypt Password
userSchema.pre('save', async function (next) {
  const user = this;
  if (user.isModified('password')) user.password = await bcrypt.hash(user.password, 8);
  next();
});

// Validate Password
userSchema.statics.findByCredentials = async (email, password) => {
  const user = await User.findOne({ email });
  if (!user) throw Error(`No existe un usuario con esta dirección`);

  const isPasswordMatch = await bcrypt.compare(password, user.password);
  if (!isPasswordMatch) throw Error('Contraseña incorrecta');
  return user;
};

export default model('User', userSchema, 'users');
