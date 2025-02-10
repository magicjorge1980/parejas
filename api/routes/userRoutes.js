import express from 'express'
import jwt from 'jsonwebtoken'

import registerUserHandler from '../handlers/registerUserHandler.js'
import authUserHandler from '../handlers/authUserHandler.js'

const router = express.Router()

const { JWT_SECRET } = process.env

router.get('/', (req, res) => {
  res.send('users')
})

router.post('/register', registerUserHandler)

router.post('/login', authUserHandler)

router.post('/verify-token', (req, res) => {
  const { token } = req.body

  try {
    const decoded = jwt.verify(token, JWT_SECRET)
    res.json({ isValid: true, user: decoded })
  } catch (error) {
    console.error('Error verificando el token:', error)
    res.status(401).json({ isValid: false })
  }
})

export default router
