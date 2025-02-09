import { Card } from '../data/index.js'
import mongoose from 'mongoose'

export const deleteCard = async (cardId) => {
  try {
    if (!mongoose.isValidObjectId(cardId)) {
      throw new Error('El ID de la carta no es válido')
    }

    const card = await Card.findById(cardId)

    if (!card) {
      throw new Error('Esta carta no existe')
    }

    await Card.deleteOne({ _id: cardId })
  } catch (error) {
    throw new Error(error.message || 'Error al eliminar la carta')
  }
}
