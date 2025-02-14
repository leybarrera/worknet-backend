import { companyService } from '../../services/index.services.js'
import randomString from 'randomstring'
import { Code } from '../../lib/conn.js'
import { nodemailerHelper } from '../../helpers/index.helpers.js'

const register = async (req, res) => {
  try {
    const data = req.body
    const { code, message } = await companyService.register(data)

    if (code == 201) {
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
    return res
      .status(500)
      .json({ message: `Error interno del servidor. ${error}` })
  }
}

export default register
