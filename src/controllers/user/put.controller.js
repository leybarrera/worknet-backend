import { userService } from '../../services/index.services.js'

const updateUser = async (req, res) => {
  try {
    const { id } = req.params
    const data = req.body

    if (data.iamge) {
      const { secure_url } = await cloudinaryHelper.uploadImage(
        'users',
        data.image
      )
      data.image = secure_url
    }
    const { code, message } = await userService.updateUser(id, data)
    return res.status(code).json({ message })
  } catch (error) {
    return res.status(500).json({
      message: 'Error interno en el servidor. Por favor, inténtelo más tarde',
    })
  }
}
const enableUser = async (req, res) => {
  try {
    const { id } = req.params
    const { code, message } = await userService.enableUser(id)
    return res.status(code).json({ message })
  } catch (error) {
    return res.status(500).json({
      message: 'Error interno en el servidor. Por favor, inténtelo más tarde',
    })
  }
}
const disableUser = async (req, res) => {
  try {
    const { id } = req.params
    const { code, message } = await userService.disableUser(id)
    return res.status(code).json({ message })
  } catch (error) {
    return res.status(500).json({
      message: 'Error interno en el servidor. Por favor, inténtelo más tarde',
    })
  }
}

export { updateUser, enableUser, disableUser }
