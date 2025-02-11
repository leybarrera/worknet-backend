import { jobOfferService } from '../../services/index.services.js'

const register = async (req, res) => {
  try {
    const data = req.body
    const { code, message } = await jobOfferService.register(data)
    return res.status(code).json({ message })
  } catch (error) {
    console.log(error.message)
    return res.status(500).json({
      message: `Error interno en el servidor. ${error}`,
    })
  }
}

export default register
