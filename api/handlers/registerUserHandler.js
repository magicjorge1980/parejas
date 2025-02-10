import { registerUser } from '../logic/registerUser.js'

export default async (req, res) => {
  const { username, email, couple, password } = req.body

  // Validación básica de entrada
  if (!username || !email || !password) {
    return res
      .status(400)
      .json({ message: 'Todos los campos son obligatorios' })
  }

  try {
    await registerUser(username, email, couple, password)
    res.status(201).json({ message: 'Usuario registrado correctamente' })
  } catch (error) {
    console.error('Error al registrar el usuario:', error)
    res.status(400).json({ message: error.message })
  }
}
