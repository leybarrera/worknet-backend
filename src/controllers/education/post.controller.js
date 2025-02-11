import { educationService } from '../../services/index.services.js'

const saveEducation = async (req, res) => {
  try {
    const data = req.body
    const { code, message } = await educationService.saveEducation(data)
    return res.status(code).json({ message })
  } catch (error) {
    return res.status(500).json({
      message: 'Error interno. Intenta de nuevo',
    })
  }
}

export default saveEducation
