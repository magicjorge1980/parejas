import { Schema, model } from 'mongoose'

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
    username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },

  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ['user', 'admin'],
    default: 'user',
  },
})


const User = model('User', userSchema)

export default User
