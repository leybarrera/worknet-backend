import { jobApplicationService } from '../../services/index.services.js'

const getAll = async (req, res) => {
  try {
    const { code, jobApplications } = await jobApplicationService.getAll()
    return res.status(code).json({ jobApplications })
  } catch (error) {
    return res.status(500).json({
      message: 'Error interno en el servidor. ' + error,
    })
  }
}

const getByUser = async (req, res) => {
  try {
    const { user_id } = req.params
    const { code, message, jobApplications } =
      await jobApplicationService.getByUser(user_id)
    return res.status(code).json(message ? { message } : { jobApplications })
  } catch (error) {
    console.log(error.message)
    return res.status(500).json({
      message: 'Error interno en el servidor. ' + error,
    })
  }
}

const getByJobOffer = async (req, res) => {
  try {
    const { id } = req.params
    const { code, message, jobApplications } =
      await jobApplicationService.getByJobOffer(id)
    return res.status(code).json(message ? { message } : { jobApplications })
  } catch (error) {
    return res.status(500).json({
      message: 'Error interno en el servidor. ' + error,
    })
  }
}

export { getAll, getByJobOffer, getByUser }
