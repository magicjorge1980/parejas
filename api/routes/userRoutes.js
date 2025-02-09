import express from 'express'

import registerUserHandler from '../handlers/registerUserHandler.js'

const router = express.Router()

router.get('/', (req, res) => {
  res.send('users')
})

router.post('/register', registerUserHandler)

export default router
