import { userService } from '../../services/index.services.js'

const deleteUser = async (req, res) => {
  try {
    const { id } = req.params
    const { code, message } = await userService.deleteUser(id)
    return res.status(code).json({ message })
  } catch (error) {
    return res.status(500).json({
      message: 'Error interno en el servidor. Por favor, inténtelo más tarde',
    })
  }
}

export default deleteUser
