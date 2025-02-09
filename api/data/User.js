import { Schema, model, Types } from 'mongoose'

const { ObjectId } = Types

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
  },

  password: {
    type: String,
    required: true,
  },
  couple: {
    type: String,
    required: true,
  },

  usedCards: [
    {
      type: ObjectId,
      ref: 'Card',
    },
  ],

  favCards: [
    {
      type: ObjectId,
      ref: 'Card',
    },
  ],

  role: {
    type: String,
    enum: ['user', 'admin'],
    default: 'user',
  },
})

const User = model('User', userSchema)

export default User
