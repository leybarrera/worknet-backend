import { nodemailerHelper } from '../../helpers/index.helpers.js'
import { codeService } from '../../services/index.services.js'

const verificateCode = async (req, res) => {
  try {
    const { code: codeUser, email } = req.query
    const { code, message, user } = await codeService.verificateCode(
      codeUser,
      email
    )

    if (user) {
      nodemailerHelper.welcome(email, user.name)
    }
    return res.status(code).json({ message })
  } catch (error) {
    return res.status(500).json({
      message: 'Error interno en el servidor. Intente de nuevo',
    })
  }
}

export default verificateCode
