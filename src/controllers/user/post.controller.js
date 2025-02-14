import {
  cloudinaryHelper,
  nodemailerHelper,
} from '../../helpers/index.helpers.js'
import { Code } from '../../lib/conn.js'
import { userService } from '../../services/index.services.js'
import { jwtUtil } from '../../utils/index.utils.js'
import randomString from 'randomstring'

const register = async (req, res) => {
  try {
    const data = req.body

    const { code, user, message } = await userService.register(data)
    if (user) {
      const newCode = randomString.generate({
        length: 6,
        charset: 'numeric',
      })
      await Code.create({
        code: newCode,
        email: data.email,
      })
      nodemailerHelper.activarCuenta(data.email, newCode)
    }
    return res.status(code).json({ message })
  } catch (error) {
    console.log(error)
    return res
      .status(500)
      .json({ message: `Error interno del servidor. ${error}` })
  }
}

export default register
