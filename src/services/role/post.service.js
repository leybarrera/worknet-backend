import { Op } from 'sequelize'
import { Role } from '../../lib/conn.js'

const roleExists = async (name) => {
  const role = await Role.findOne({
    where: {
      name: {
        [Op.iLike]: name,
      },
    },
  })

  return role
}

const register = async (data) => {
  if (await roleExists(data.name))
    return { code: 400, message: 'Ya existe un rol con ese nombre' }

  const role = await Role.create(data)

  return role
    ? { code: 201, message: 'Rol creado con éxito' }
    : {
        code: 400,
        message: 'No se pudo crear el rol. Por favor, inténtelo más tarde',
      }
}
export default register
