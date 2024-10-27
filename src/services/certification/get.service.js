import { Certification, User } from '../../lib/conn.js'

const getAll = async () => {
  const certifications = await Certification.findAll({
    include: [User],
  })
  return { code: 200, certifications }
}
const getById = async (id) => {
  const certification = await Certification.findOne({
    where: {
      id,
    },
    include: [User],
  })
  return certification
    ? { code: 200, certification }
    : {
        code: 404,
        message: 'Certificación no encontrada',
      }
}
const getByUser = async (UserId) => {
  const certifications = await Certification.findAll({
    where: {
      UserId,
      include: [User],
    },
  })

  return { code: 200, certifications }
}
export { getAll, getById, getByUser }
