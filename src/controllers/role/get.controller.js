import { roleService } from '../../services/index.services.js'

const getAll = async (req, res) => {
  try {
    const { code, roles } = await roleService.getAll()
    return res.status(code).json({ roles })
  } catch (error) {
    return res
      .status(500)
      .json({ message: `Error interno del servidor. ${error}` })
  }
}

const getAllValids = async (req, res) => {
  try {
    const { code, roles } = await roleService.getAllValids()
    return res.status(code).json({ roles })
  } catch (error) {
    return res
      .status(500)
      .json({ message: `Error interno del servidor. ${error}` })
  }
}

const getById = async (req, res) => {
  try {
    const { id } = req.params
    const { code, message, role } = await roleService.getById(id)
    return res.status(code).json(message ? { message } : { role })
  } catch (error) {
    return res
      .status(500)
      .json({ message: `Error interno del servidor. ${error}` })
  }
}

export { getAll, getById, getAllValids }
