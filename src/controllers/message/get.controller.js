import { messageService } from '../../services/index.services.js'

const getConversation = async (req, res) => {
  try {
    const { sender_id, recipient_id } = req.query
    const { code, messages } = await messageService.getConversation(
      sender_id,
      recipient_id
    )
    return res.status(code).json({ messages })
  } catch (error) {
    return res.status(500).json({
      message: 'Error interno en el servidor. ' + error,
    })
  }
}

const getByUser = async (req, res) => {
  try {
    const { id } = req.params
    const { code, messages } = await messageService.getByUser(id)
    return res.status(code).json({ messages })
  } catch (error) {
    return res.status(500).json({
      message: 'Error interno en el servidor. ' + error,
    })
  }
}

export { getConversation, getByUser }
