import { interactionService } from '../../services/index.services.js'

const getAll = async (req, res) => {
  try {
    const { code, interactions } = await interactionService.getAll()
    return res.status(code).json({ interactions })
  } catch (error) {
    return res.status(500).json({
      message: 'Error interno en el servidor. ' + error,
    })
  }
}

const getById = async (req, res) => {
  try {
    const { id } = req.params
    const { code, message, interaction } = await interactionService.getById(id)
    return res.status(code).json(message ? { message } : { interaction })
  } catch (error) {
    return res.status(500).json({
      message: 'Error interno en el servidor. ' + error,
    })
  }
}

const getByType = async (req, res) => {
  try {
    const { interaction_type } = req.query
    const { code, message, interactions } = await interactionService.getByType(
      interaction_type
    )
    return res.status(code).json(message ? { message } : { interactions })
  } catch (error) {
    return res.status(500).json({
      message: 'Error interno en el servidor. ' + error,
    })
  }
}

export { getAll, getById, getByType }
