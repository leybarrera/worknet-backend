import { cloudinaryHelper } from '../../helpers/index.helpers.js'
import { resumeService } from '../../services/index.services.js'

const update = async (req, res) => {
  try {
    const { id } = req.params
    const file_url = await cloudinaryHelper.uploadCV(data.resume)
    const { code, message } = await resumeService.update(id, file_url)
    return res.status(code).json({ message })
  } catch (error) {
    return res.status(500).json({
      message: 'Error interno en el servidor. ' + error,
    })
  }
}

export default update
