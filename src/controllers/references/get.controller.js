import { referenceService } from '../../services/index.services.js'

const getByUser = async (req, res) => {
  try {
    const { id } = req.params
    const { code, references } = await referenceService.getByUser(id)
    return res.status(code).json({ references })
  } catch (error) {
    return res.status(500).json({
      message: 'Error interno. Intente de nuevo.',
    })
  }
}

export { getByUser }
