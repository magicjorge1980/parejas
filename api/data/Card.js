import { Schema, model } from 'mongoose'

const cardSchema = new Schema({
  CardTitle: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
    unique: true,
  },
})

const User = model('Card', cardSchema)

export default User
