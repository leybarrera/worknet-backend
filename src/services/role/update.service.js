import { Op } from 'sequelize'
import { Role } from '../../lib/conn'

const existOtherRole = async (id, name) => {
  const role = await Role.findOne({
    where: {
      name: {
        [Op.iLike]: name,
      },
      id: {
        [Op.not]: id,
      },
    },
  })
  return role
}

const update = async (id, data) => {
  if (await existOtherRole(id, data.name))
    return { code: 400, message: 'Ya existe un rol con ese nombre' }

  const role = await Role.findOne({
    where: {
      id,
      isDeleted: false,
    },
  })

  if (!role) return { code: 404, message: 'Rol no encontrado' }

  const [rows] = await role.update(data)
  return rows > 0
    ? { code: 200, message: 'Rol actualizado con éxito' }
    : {
        code: 400,
        message: 'No se pudo actualizar el rol. Por favor, inténtelo más tarde',
      }
}

export default update
