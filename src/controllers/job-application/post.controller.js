import { jobApplicationService } from '../../services/index.services.js'

const register = async (req, res) => {
  try {
    const data = req.body
    const { code, message } = await jobApplicationService.register(data)
    return res.status(code).json({ message })
  } catch (error) {
    return res.status(500).json({
      message: 'Error interno en el servidor. ' + error,
    })
  }
}

export default register
