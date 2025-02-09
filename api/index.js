import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import 'dotenv/config'

import userRoutes from './routes/userRoutes.js'
import cardRoutes from './routes/cardRoutes.js'

const { MONGODB_URL, PORT } = process.env

mongoose
  .connect(MONGODB_URL)
  .then(() => {
    const api = express()

    api.use(cors())
    api.use(express.json())

    api.use('/api/users', userRoutes)

    api.use('/api/cards', cardRoutes)

    api.listen(PORT, () =>
      console.log(`Servidor ejecuntándose en puerto ${PORT}`)
    )
  })
  .catch((error) => console.error(error))
