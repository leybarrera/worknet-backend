import { jobApplicationService } from '../../services/index.services.js'

const deleteById = async (req, res) => {
  try {
    const { id } = req.params
    const { code, message } = await jobApplicationService.deleteByID(id)
    return res.status(code).json({ message })
  } catch (error) {
    return res.status(500).json({
      message: 'Error interno en el servidor. ' + error,
    })
  }
}

const remove = async (req, res) => {
  try {
    const { UserId, JobOfferId } = req.query
    const { code, message } = await jobApplicationService.remove({
      UserId,
      JobOfferId,
    })
    return res.status(code).json({ message })
  } catch (error) {
    return res.status(500).json({
      message: 'Error interno en el servidor. ' + error,
    })
  }
}

export { remove, deleteById }
