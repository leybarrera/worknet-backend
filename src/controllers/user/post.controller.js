import { cloudinaryHelper } from '../../helpers/index.helpers.js'
import { userService } from '../../services/index.services.js'

const register = async (req, res) => {
  try {
    const data = req.body
    // const secure_url = await cloudinaryHelper.uploadImage('users', data.image)
    // data.profile_picture = secure_url

    const { code, message } = await userService.register(data)
    return res.status(code).json({ message })
  } catch (error) {
    console.log(error)
    return res
      .status(500)
      .json({ message: `Error interno del servidor. ${error}` })
  }
}

export default register
