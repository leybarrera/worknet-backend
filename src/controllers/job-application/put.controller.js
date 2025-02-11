import { nodemailerHelper } from '../../helpers/index.helpers.js'
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

const rejectPostulation = async (req, res) => {
  try {
    const { id } = req.params
    const data = req.body
    const { email, name, job_title } = data
    const { code, message } = await jobApplicationService.rejectPostulation(id)

    if (code === 200) {
      nodemailerHelper.rejectPostulation(email, name, job_title)
    }
    return res.status(code).json({ message })
  } catch (error) {
    console.log(error)
    return res.status(500).json({
      message: 'Error interno en el servidor. ' + error,
    })
  }
}

const acceptPostulation = async (req, res) => {
  try {
    const { id } = req.params
    const data = req.body
    const { email, name, job_title } = data
    const { code, message } = await jobApplicationService.acceptPostulation(id)

    if (code === 200) {
      nodemailerHelper.acceptPostulation(email, name, job_title)
    }
    return res.status(code).json({ message })
  } catch (error) {
    console.log(error)
    return res.status(500).json({
      message: 'Error interno en el servidor. ' + error,
    })
  }
}

export { update, rejectPostulation, acceptPostulation }
