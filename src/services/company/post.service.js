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

const existByPhone = async (phone) => {
  const company = await Company.findOne({
    where: {
      phone,
    },
  })
  return company
}

const existByEmail = async (email) => {
  const company = await Company.findOne({
    where: {
      email,
    },
  })
  return company
}

const existByRuc = async (ruc) => {
  const company = await Company.findOne({
    where: {
      ruc,
    },
  })
  return company
}

const register = async (data) => {
  const { name } = data
  if (await companyExists(name))
    return { code: 400, message: 'Ya existe una empresa con ese nombre' }

  if (await existByPhone(data.phone))
    return {
      code: 400,
      message: 'Ya existe una empresa con ese número de teléfono',
    }

  if (await existByEmail(data.email))
    return { code: 400, message: 'Ya existe una empresa con ese email' }

  if (await existByRuc(data.ruc))
    return { code: 400, message: 'Ya existe una empresa con ese RUC' }

  const company = await Company.create(data)
  return company
    ? { code: 201, message: 'Empresa creada con éxito' }
    : {
        code: 400,
        message: 'No se pudo crear la empresa. Por favor, inténtelo más tarde',
      }
}
export default register
