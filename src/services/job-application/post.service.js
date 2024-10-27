import { JobApplication, JobOffer, User } from '../../lib/conn.js'

const jobOfferExists = async (id) => {
  const jobOffer = await JobOffer.findOne({
    where: {
      id,
    },
  })
  return jobOffer
}

const userExists = async (id) => {
  const user = await User.findOne({
    where: {
      id,
      isActive: true,
      isDeleted: false,
    },
  })
  return user
}

const register = async (data) => {
  const { JobOfferId, UserId } = data

  if (!(await jobOfferExists(JobOfferId)))
    return { code: 400, message: 'Oferta de trabajo no encontrada' }

  if (!(await userExists(UserId)))
    return { code: 400, message: 'Usuario no encontrado' }

  const jobApplication = await JobApplication.create(data)
  return jobApplication
    ? { code: 201, message: 'Solicitud de trabajo creada con éxito' }
    : {
        code: 400,
        message:
          'No se pudo crear la solicitud de trabajo. Por favor, inténtelo más tarde',
      }
}
export default register
