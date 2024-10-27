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

  const [rows] = await company.update(data)
  return rows > 0
    ? { code: 200, message: 'Empresa actualizada con éxito' }
    : {
        code: 400,
        message:
          'No se pudo actualizar la empresa. Por favor, inténtelo más tarde',
      }
}

export default update
