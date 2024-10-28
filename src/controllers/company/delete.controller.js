import { companyService } from '../../services/index.services'

const remove = async (req, res) => {
  try {
    const { id } = req.params
    const { code, message } = await companyService.remove(id)
    return res.status(code).json({ message })
  } catch (error) {
    return res
      .status(500)
      .json({ message: `Error interno del servidor. ${error}` })
  }
}

export default remove
