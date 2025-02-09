import { User } from '../data/index.js'
import bcrypt from 'bcryptjs'
export const registerUser = async (name, username, email, couple, password) => {
  try {
    const user = await User.findOne({ email })

    if (user) {
      throw new Error('El email ya está registrado')
    }

    const passHash = await bcrypt.hash(password, 10)

    const newUser = {
      name,
      username,
      email,
      couple,
      password: passHash,
      role: 'user',
    }

    await User.create(newUser)
  } catch (error) {
    throw new Error(error.message || 'Error al registrar el usuario')
  }
}
