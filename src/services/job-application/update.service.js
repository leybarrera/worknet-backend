import { JobApplication } from '../../lib/conn.js'

const update = async (id, status) => {
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

const rejectPostulation = async (id) => {
  const jobApplication = await JobApplication.findOne({
    where: {
      id,
    },
  })
  if (!jobApplication)
    return { code: 404, message: 'Solicitud de trabajo no encontrada' }

  jobApplication.status = 'Rechazado'
  await jobApplication.save()
  return { code: 200, message: 'Solicitud de trabajo rechazada' }
}
const acceptPostulation = async (id) => {
  const jobApplication = await JobApplication.findOne({
    where: {
      id,
    },
  })
  if (!jobApplication)
    return { code: 404, message: 'Solicitud de trabajo no encontrada' }

  jobApplication.status = 'Aceptado'
  await jobApplication.save()
  return {
    code: 200,
    message: 'Solicitud de trabajo aceptada. Se notificará al candidato.',
  }
}

export { update, rejectPostulation, acceptPostulation }
