import { cloudinaryHelper } from '../../helpers/index.helpers.js'
import { userService } from '../../services/index.services.js'

const registerUser = async (req, res) => {
  try {
    const data = req.body
    const secure_url = await cloudinaryHelper.uploadImage('users', data.image)
    data.image = secure_url
    const { code, message } = await userService.registerUser(data)
    return res.status(code).json({ message })
  } catch (error) {
    return res.status(500).json({
      message: 'Error interno en el servidor. Por favor, inténtelo más tarde',
    })
  }
}

export default registerUser
