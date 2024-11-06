import { authService } from '../../services/index.services.js'

const login = async (req, res) => {
  try {
    const { email, password } = req.body
    const { code, message, token, user } = await authService.login(
      email,
      password
    )
    return res.status(code).json(mes ? { message } : { token, user })
  } catch (error) {
    return res.status(500).json({
      message: 'Error interno en el servidor. ' + error,
    })
  }
}

export default { login }
