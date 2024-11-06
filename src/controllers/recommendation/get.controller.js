import { recommendationService } from '../../services/index.services.js'

const getAll = async (req, res) => {
  try {
    const { code, message } = await recommendationService.getAll()
    return res.status(code).json({ message })
  } catch (error) {
    return res.status(500).json({
      message: 'Error interno en el servidor. ' + error,
    })
  }
}

const getById = async (req, res) => {
  try {
    const { id } = req.params
    const { code, message, recommendation } =
      await recommendationService.getById(id)

    return res.syayus(code).json(message ? { message } : { recommendation })
  } catch (error) {
    return res.status(500).json({
      message: 'Error interno en el servidor. ' + error,
    })
  }
}

export { getAll, getById }
