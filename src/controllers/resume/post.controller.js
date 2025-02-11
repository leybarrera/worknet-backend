import { cloudinaryHelper } from '../../helpers/index.helpers.js'
import { resumeService } from '../../services/index.services.js'

const register = async (req, res) => {
  try {
    const file = req.file
    const { id } = req.params
    const secure_url = await cloudinaryHelper.uploadPdf(
      'resumes',
      file.buffer,
      file.originalname
    )
    const { code, message } = await resumeService.register({
      UserId: id,
      file_url: secure_url,
    })
    return res.status(code).json({ message, secure_url })
  } catch (error) {
    console.log(error)
    return res.status(500).json({
      message: 'Error interno en el servidor. ' + error,
    })
  }
}

export default register
