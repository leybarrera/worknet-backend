import { educationService } from '../../services/index.services.js'

const getAll = async (req, res) => {
  try {
    const { code, educations } = await educationService.getAll()
    return res.status(code).json({ educations })
  } catch (error) {
    return res.status(500).json({
      message: 'Error interno. Intente de nuevo',
    })
  }
}
const getByUser = async (req, res) => {
  try {
    const { id } = req.params
    const { code, educations } = await educationService.getByUser(id)
    return res.status(code).json({ educations })
  } catch (error) {
    console.log(error)
    return res.status(500).json({
      message: 'Error interno. Intente de nuevo',
    })
  }
}

export { getAll, getByUser }
