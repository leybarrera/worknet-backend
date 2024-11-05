import { jobApplicationService } from '../../services/index.services.js'

const update = async (req, res) => {
  try {
    const { id } = req.params
    const { status } = req.params

    const { code, message } = await jobApplicationService.updateStatus(
      id,
      status
    )
    return res.status(code).json({ message })
  } catch (error) {
    return res.status(500).json({
      message: 'Error interno en el servidor. ' + error,
    })
  }
}

export default update
