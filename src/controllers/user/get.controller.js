import { userService } from '../../services/index.services.js'
import { jwtUtil } from '../../utils/index.utils.js'

const getAll = async (req, res) => {
  try {
    const { code, users } = await userService.getAll()
    return res.status(code).json({ users })
  } catch (error) {
    return res
      .status(500)
      .json({ message: `Error interno del servidor. ${error}` })
  }
}

const getById = async (req, res) => {
  try {
    const { id } = req.params
    const { code, message, user } = await userService.getById(id)
    return res.status(code).json(message ? { message } : { user })
  } catch (error) {
    return res
      .status(500)
      .json({ message: `Error interno del servidor. ${error}` })
  }
}

const getByEmail = async (req, res) => {
  try {
    console.log('entra')
    const { email } = req.query
    console.log(email)
    const { code, message, user } = await userService.getByEmail(email)
    return res.status(code).json(message ? { message } : { user })
  } catch (error) {
    return res
      .status(500)
      .json({ message: `Error interno del servidor. ${error}` })
  }
}

const getOnlyValids = async (req, res) => {
  try {
    const { code, users } = await userService.getOnlyValids()
    return res.status(code).json({ users })
  } catch (error) {
    return res
      .status(500)
      .json({ message: `Error interno del servidor. ${error}` })
  }
}

const getOnlyActives = async (req, res) => {
  try {
    const { code, users } = await userService.getOnlyActives()
    return res.status(code).json({ users })
  } catch (error) {
    return res
      .status(500)
      .json({ message: `Error interno del servidor. ${error}` })
  }
}

const getOnlyInactives = async (req, res) => {
  try {
    const { code, users } = await userService.getOnlyInactives()
    return res.status(code).json({ users })
  } catch (error) {
    return res
      .status(500)
      .json({ message: `Error interno del servidor. ${error}` })
  }
}

const getRecommendationsUserLogged = async (req, res) => {
  try {
    const { token } = req.query
    const { id } = jwtUtil.verifyToken(token)
    const { code, users } = await userService.getRecommendationsUserLogged(id)
    return res.status(code).json({ users })
  } catch (error) {
    return res.status(500).json({
      message: 'Error interno en el servidor. ' + error,
    })
  }
}
const getRecommendationsUserNotLogged = async (req, res) => {
  try {
    const { code, users } = await userService.getRecommendationsUserNotLogged()
    return res.status(code).json({ users })
  } catch (error) {
    return res.status(500).json({
      message: 'Error interno en el servidor. ' + error,
    })
  }
}

export {
  getAll,
  getById,
  getByEmail,
  getOnlyValids,
  getOnlyActives,
  getOnlyInactives,
  getRecommendationsUserLogged,
  getRecommendationsUserNotLogged,
}
