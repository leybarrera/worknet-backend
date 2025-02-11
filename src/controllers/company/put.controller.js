import { companyService } from '../../services/index.services.js'
import { bcryptUtil } from '../../utils/index.utils.js'

const update = async (req, res) => {
  try {
    const { id } = req.params
    const data = req.body
    const { code, message, companyUpdated } = await companyService.update(
      id,
      data
    )
    return res.status(code).json(
      companyUpdated
        ? {
            message,
            companyUpdated,
          }
        : { message }
    )
  } catch (error) {
    return res
      .status(500)
      .json({ message: `Error interno del servidor. ${error}` })
  }
}

const updatePassword = async (req, res) => {
  try {
    const { id } = req.params
    const { password } = req.body
    const hash = await bcryptUtil.hashPassword(password)

    const { code, message } = await companyService.updatePassword(id, {
      password: hash,
    })

    return res.status(code).json({ message })
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

export { update, recoveryCompany, updatePassword }
