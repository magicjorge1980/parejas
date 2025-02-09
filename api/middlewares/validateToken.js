import jwt from '../utils/jsonwebtoken-promised.js'
import 'dotenv/config'

const { JWT_SECRET } = process.env

export const authRequired = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({ message: 'No autorizado' })
    }

    const token = authHeader.slice(7)

    const payload = await jwt.verify(token, JWT_SECRET)

    req.user = payload

    next()
  } catch (err) {
    return res.status(401).json({ message: 'Token inválido' })
  }
}
