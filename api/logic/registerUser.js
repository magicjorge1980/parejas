import { User } from '../data/index.js'
import bcrypt from 'bcryptjs'
export const registerUser = async (name, username, email, password) => {
  try {
    const user = await User.findOne({ email })

    if (user) {
      return res.status(400).send('El usuario ya existe')
    }

    const passHash = await bcrypt.hash(password, 10)

    const newUser = {
      name,
      username,
      email,
      password: passHash,
      role: 'user',
    }

    await User.create(newUser)
  } catch (error) {
    console.error(error)
    res.status(500).send('Error al registrar el usuario')
  }
}
