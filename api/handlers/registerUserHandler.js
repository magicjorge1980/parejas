import { registerUser } from '../logic/registerUser.js'

export default async (req, res) => {
  const { name, username, email, couple, password } = req.body

  try {
    await registerUser(name, username, email, couple, password)
    res.status(201).send('Usuario registrado correctamente')
  } catch (error) {
    console.error(error)
    res.status(400).json({ message: error.message })
  }
}
