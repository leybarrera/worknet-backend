import { referenceService } from '../../services/index.services.js'

const deleteReference = async (req, res) => {
  try {
    const { id } = req.params
    const { code, message } = await referenceService.deleteReference(id)
    return res.status(code).json({ message })
  } catch (error) {
    return res.status(500).json({
      message: 'Error interno. Intente de nuevo.',
    })
  }
}

export default deleteReference
