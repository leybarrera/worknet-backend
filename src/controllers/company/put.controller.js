import { companyService } from '../../services/index.services.js'

const update = async (req, res) => {
  try {
    const { id } = req.params
    const data = req.body
    const { code, message } = await companyService.update(id, data)
    return res.status(code).json({
      message,
    })
  } catch (error) {
    return res
      .status(500)
      .json({ message: `Error interno del servidor. ${error}` })
  }
}

const recoveryCompany = async (req, res) => {
  try {
    const { id } = req.params
    const { code, message } = await companyService.recoveryCompany(id)
    return res.status(code).json({
      message,
    })
  } catch (error) {
    return res
      .status(500)
      .json({ message: `Error interno del servidor. ${error}` })
  }
}

export { update, recoveryCompany }
