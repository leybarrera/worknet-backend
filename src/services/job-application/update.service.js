import { JobApplication } from '../../lib/conn.js'

const updateStatus = async (id, status) => {
  const jobApplication = await JobApplication.findOne({
    where: {
      id,
    },
  })
  if (!jobApplication)
    return { code: 404, message: 'Solicitud de trabajo no encontrada' }

  jobApplication.status = status
  await jobApplication.save()
  return { code: 200, message: 'Solicitud de trabajo actualizada con éxito' }
}

export default updateStatus
