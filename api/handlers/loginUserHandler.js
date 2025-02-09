import { loginUser } from '../logic/loginUser.js'

export default async (req, res) => {
  const { email, password } = req.body

  try {
    await loginUser(email, password)
    res.status(201).send('Inicio de sesión correcto')
  } catch (error) {
    console.error(error)
    res.status(400).json({ message: error.message })
  }
}
