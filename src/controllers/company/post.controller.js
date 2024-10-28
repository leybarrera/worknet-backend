import { companyService } from '../../services/index.services.js'

const register = async (req, res) => {
  try {
    const data = req.body
    const { code, message } = await companyService.register(data)
    return res.status(code).json({ message })
  } catch (error) {
    return res
      .status(500)
      .json({ message: `Error interno del servidor. ${error}` })
  }
}

export default register
