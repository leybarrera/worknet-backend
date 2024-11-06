import { messageService } from '../../services/index.services.js'

const updateIsRead = async (req, res) => {
  try {
    const { id } = req.params
    const { code, message } = await messageService.updateIsRead(id)
    return res.status(code).json({ message })
  } catch (error) {
    return res.status(500).json({
      message: 'Error interno en el servidor. ' + error,
    })
  }
}

export default updateIsRead
