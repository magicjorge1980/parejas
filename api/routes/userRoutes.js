import express from 'express'

const router = express.Router()

router.get('/', (req, res) => {
    res.send('users')
})

router.post('/auth', (req,res) => {
    res.send('auth')
})


export default router