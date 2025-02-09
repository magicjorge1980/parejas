import { createCard } from '../logic/createCard.js'

export default async (req, res) => {
  const { title, description } = req.body

  try {
    await createCard(title, description)
    res.status(201).send('Carta registrada correctamente')
  } catch (error) {
    console.error(error)
    res.status(400).json({ message: error.message })
  }
}
