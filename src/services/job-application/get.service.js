import {
  Company,
  Education,
  JobApplication,
  JobOffer,
  Skill,
  User,
  UserSkill,
} from '../../lib/conn.js'

const getAll = async () => {
  const jobApplications = await JobApplication.findAll({
    include: [User, JobOffer],
  })
  return { code: 200, jobApplications }
}
const getById = async (id) => {
  const jobApplication = await JobApplication.findOne({
    where: {
      id,
    },
    include: [User, JobOffer],
  })
  return jobApplication
    ? { code: 200, jobApplication }
    : { code: 404, message: 'Solicitud de trabajo no encontrada' }
}
const getByUser = async (UserId) => {
  const jobApplications = await JobApplication.findAll({
    where: {
      UserId,
    },
    include: [
      User,
      {
        model: JobOffer,
        include: [Company],
      },
    ],
  })

  return jobApplications
    ? { code: 200, jobApplications }
    : {
        code: 404,
        message: 'Solicitudes de trabajo no encontradas para este usuario',
      }
}
const getByJobOffer = async (JobOfferId) => {
  const jobApplications = await JobApplication.findAll({
    where: {
      JobOfferId,
    },
    include: [
      JobOffer,
      {
        model: User,
        include: [Education, Skill],
      },
    ],
  })
  return jobApplications
    ? { code: 200, jobApplications }
    : {
        code: 404,
        message:
          'Solicitudes de trabajo no encontradas para esta oferta de trabajo',
      }
}

export { getAll, getByUser, getByJobOffer }
