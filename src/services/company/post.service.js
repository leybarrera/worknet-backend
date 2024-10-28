import { Op } from 'sequelize'
import { Company } from '../../lib/conn.js'

const companyExists = async (name) => {
  const company = await Company.findOne({
    where: {
      name: {
        [Op.iLike]: name,
      },
    },
  })
  return company
}
const register = async (data) => {
  const { name } = data
  if (await companyExists(name))
    return { code: 400, message: 'Ya existe una empresa con ese nombre' }

  const company = await Company.create(data)
  return company
    ? { code: 201, message: 'Empresa creada con éxito' }
    : {
        code: 400,
        message: 'No se pudo crear la empresa. Por favor, inténtelo más tarde',
      }
}
export default register
