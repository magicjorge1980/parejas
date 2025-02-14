import { authUser } from '../logic/authUser.js'

import jwt from '../utils/jsonwebtoken-promised.js'

const { JWT_SECRET } = process.env

export default async (req, res) => {
  const { email, password } = req.body

  try {
    const { userId, username, role } = await authUser(email, password)

    const token = await jwt.sign({ sub: userId, role: role }, JWT_SECRET, {
      expiresIn: '1d',
    })
    res.json({ token, username })
  } catch (error) {
    console.error(error)
    res.status(400).json({ message: error.message })
  }
}
