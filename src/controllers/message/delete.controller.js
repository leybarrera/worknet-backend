import { messageService } from '../../services/index.services.js'

const remove = async (req, res) => {
  try {
    const { id } = req.params
    const { code, message } = await messageService.remove(id)
    return res.status(code).json({
      message,
    })
  } catch (error) {
    return res.status(500).json({
      message: 'Error interno en el servidor. ' + error,
    })
  }
}

export default remove
