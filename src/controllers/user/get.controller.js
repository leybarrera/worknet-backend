import { userService } from '../../services/index.services.js'

const getActiveUsers = async (req, res) => {
  try {
    const { code, users } = await userService.getActiveUsers()
    return res.status(code).json({ users })
  } catch (error) {
    return res.status(500).json({
      message: 'Error interno en el servidor. Por favor, inténtelo más tarde',
    })
  }
}
const getAll = async (req, res) => {
  try {
    const { code, users } = await userService.getAll()
    return res.status(code).json({ users })
  } catch (error) {
    return res.status(500).json({
      message: 'Error interno en el servidor. Por favor, inténtelo más tarde',
    })
  }
}
const getById = async (req, res) => {
  try {
    const { id } = req.params
    const { code, user, message } = await userService.getById(id)
    return res.status(code).json(message ? { message } : { user })
  } catch (error) {
    return res.status(500).json({
      message: 'Error interno en el servidor. Por favor, inténtelo más tarde',
    })
  }
}
const getByEmail = async (req, res) => {
  try {
    const { email } = req.query
    const { code, user, message } = await userService.getByEmail(email)
    return res.status(code).json(message ? { message } : { user })
  } catch (error) {
    return res.status(500).json({
      message: 'Error interno en el servidor. Por favor, inténtelo más tarde',
    })
  }
}
const getByDni = async (req, res) => {
  try {
    const { dni } = req.query
    const { code, user, message } = await userService.getByDni(dni)
    return res.status(code).json(message ? { message } : { user })
  } catch (error) {
    return res.status(500).json({
      message: 'Error interno en el servidor. Por favor, inténtelo más tarde',
    })
  }
}

export { getActiveUsers, getAll, getById, getByEmail, getByDni }
