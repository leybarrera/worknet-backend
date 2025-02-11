import { Op } from 'sequelize'
import { Company } from '../../lib/conn.js'

const existOtherCompany = async (id, name) => {
  const company = await Company.findOne({
    where: {
      name: {
        [Op.iLike]: name,
      },
      id: {
        [Op.not]: id,
      },
    },
  })

  return company
}
const update = async (id, data) => {
  const { name } = data

  if (name && (await existOtherCompany(id, name)))
    return { code: 400, message: 'Ya existe una empresa con ese nombre' }

  const company = await Company.findOne({
    where: {
      id,
      isDeleted: false,
    },
  })

  if (!company) return { code: 404, message: 'Empresa no encontrada' }

  const [rows] = await Company.update(data, {
    where: {
      id,
    },
  })
  if (rows > 0) {
    const updatedCompany = await Company.findOne({
      where: {
        id,
      },
    })

    return {
      code: 200,
      message: 'Empresa actualizada con éxito',
      companyUpdated: updatedCompany,
    }
  }
  return {
    code: 400,
    message: 'No se pudo actualizar la empresa. Por favor, inténtelo más tarde',
  }
}

const updatePassword = async (id, data) => {
  const company = await Company.findOne({
    where: {
      id,
      isDeleted: false,
    },
  })

  if (!company) return { code: 404, message: 'La empresa no fue encontrada' }

  const [rows] = await Company.update(data, {
    where: {
      id,
    },
  })

  return rows > 0
    ? { code: 200, message: 'Contraseña actualizada con éxito' }
    : { code: 400, message: 'No se pudo actualizar la contraseña' }
}

const recoveryCompany = async (id) => {
  const company = await Company.findOne({
    where: {
      id,
      isDeleted: true,
    },
  })

  if (!company) return { code: 404, message: 'La empresa no fue encontrada' }

  company.isDeleted = false
  await company.save()
  return { code: 200, message: 'La empresa fue recuperada con éxito' }
}

export { update, recoveryCompany, updatePassword }
