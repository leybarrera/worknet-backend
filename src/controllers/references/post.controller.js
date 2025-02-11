import { referenceService } from '../../services/index.services.js'

const saveReference = async (req, res) => {
  try {
    const data = req.body
    const { code, message } = await referenceService.saveReference(data)
    return res.status(code).json({ message })
  } catch (error) {
    return res.status(500).json({
      message: 'Error interno. Intente de nuevo.',
    })
  }
}

export default saveReference
