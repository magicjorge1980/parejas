import { registerUser } from '../logic/registerUser.js'

export default async (req, res) => {
  const { name, username, email, password } = req.body

  try {
    await registerUser(name, username, email, password)
    res.status(201).send('Usuario registrado correctamente')
  } catch (error) {
    console.error(error)
    res.status(500).send('Error al registrar el usuario')
  }
}
