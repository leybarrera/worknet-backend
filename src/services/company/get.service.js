import { Company, User } from '../../lib/conn.js'

const getAll = async () => {
  const companies = await Company.findAll({
    where: {
      isDeleted: false,
    },
    include: [User],
  })
  return { code: 200, companies }
}
const getById = async (id) => {
  const company = await Company.findOne({
    where: {
      id,
      isDeleted: false,
    },
    include: [User],
  })
  return company
    ? { code: 200, company }
    : { code: 404, message: 'Empresa no encontrada' }
}
const getByUser = async (UserId) => {
  const company = await Company.findOne({
    where: {
      UserId,
      isDeleted: false,
    },
    include: [User],
  })
  return company
    ? { code: 200, company }
    : {
        code: 404,
        message: 'El usuario no tiene una empresa registrada',
      }
}

export { getAll, getById, getByUser }
