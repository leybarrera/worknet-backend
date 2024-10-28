import { companyService } from '../../services/index.services.js'

const getAll = async (req, res) => {
  try {
    const { code, companies } = await companyService.getAll()
    return res.status(code).json({ companies })
  } catch (error) {
    return res
      .status(500)
      .json({ message: `Error interno del servidor. ${error}` })
  }
}

const getById = async (req, res) => {
  try {
    const { id } = req.params
    const { code, message, company } = await companyService.getById(id)
    return res.status(code).json(message ? { message } : { company })
  } catch (error) {
    return res
      .status(500)
      .json({ message: `Error interno del servidor. ${error}` })
  }
}

const getByUser = async (req, res) => {
  try {
    const { user_id: UserId } = req.params
    const { code, message, company } = await companyService.getByUser(UserId)
    return res.status(code).json(message ? { message } : { company })
  } catch (error) {
    return res
      .status(500)
      .json({ message: `Error interno del servidor. ${error}` })
  }
}

export { getAll, getById, getByUser }
