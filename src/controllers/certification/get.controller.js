import { certificationService } from '../../services/index.services.js'

const getAll = async (req, res) => {
  try {
    const { code, certifications } = await certificationService.getAll()
    return res.status(code).json({ certifications })
  } catch (error) {
    return res
      .status(500)
      .json({ message: `Error interno del servidor. ${error}` })
  }
}

const getById = async (req, res) => {
  try {
    const { id } = req.params
    const { code, message, certification } = await certificationService.getById(
      id
    )
    return res.status(code).json(message ? { message } : { certification })
  } catch (error) {
    return res
      .status(500)
      .json({ message: `Error interno del servidor. ${error}` })
  }
}

const getByUser = async (req, res) => {
  try {
    const { user_id: UserId } = req.params
    const { code, certifications } = await certificationService.getByUser(
      UserId
    )
    return res.status(code).json({ certifications })
  } catch (error) {
    console.log(error)
    return res
      .status(500)
      .json({ message: `Error interno del servidor. ${error}` })
  }
}

export { getAll, getById, getByUser }
