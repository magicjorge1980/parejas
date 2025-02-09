import { Card } from '../data/index.js'
export const createCard = async (title, description) => {
  try {
    const card = await Card.findOne({ title })

    if (card) {
      throw new Error('Esta carta ya está registrada')
    }

    const newCard = {
      title,
      description,
    }

    await Card.create(newCard)
  } catch (error) {
    throw new Error(error.message || 'Error al registrar la carta')
  }
}
