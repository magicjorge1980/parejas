import { User } from '../data/index.js'
import bcrypt from 'bcryptjs'
export const authUser = async (email, password) => {
  try {
    const user = await User.findOne({ email })

    if (!user) {
      throw new Error('El usuario no está registrado')
    }

    const credentials = await bcrypt.compare(password, user.password)
    if (!credentials) {
      throw new Error('Contraseña incorrecta')
    }

    return {
      userId: user._id,
      username: user.username,
      role: user.role,
    }
  } catch (error) {
    throw new Error(error.message || 'Error al iniciar sesión')
  }
}
