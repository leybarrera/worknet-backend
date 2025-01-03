import { nodemailerHelper } from '../../helpers/index.helpers.js'
import { authService } from '../../services/index.services.js'

const login = async (req, res) => {
  try {
    const { email, password } = req.body
    const { code, message, token, user, company } = await authService.login(
      email,
      password
    )
    if (user) {
      return res.status(code).json({ token, user })
    }

    if (company) {
      return res.status(code).json({ token, company })
    }

    return res.status(code).json({ message })
  } catch (error) {
    return res.status(500).json({
      message: 'Error interno en el servidor. ' + error,
    })
  }
}

const accountActivation = async (req, res) => {
  try {
    const { token } = req.query
    const { code, user, company, message } =
      await authService.accountActivation(token)

    if (user || company) {
      nodemailerHelper.confirmActivation(
        user.email || company.email,
        user.name || company.name
      )
    }
    return res.status(code).json({ message })
  } catch (error) {
    console.log(error.message)
    return res.status(500).json({
      message: 'Error interno en el servidor. ' + error,
    })
  }
}

export default { login, accountActivation }
