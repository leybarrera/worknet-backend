import { Role } from '../../lib/conn.js'

const getAllValids = async () => {
  const roles = await Role.findAll({
    where: {
      isDeleted: false,
    },
  })
  return { code: 200, roles }
}

const getAll = async () => {
  const roles = await Role.findAll({})
  return { code: 200, roles }
}

const getById = async (id) => {
  const role = await Role.findOne({
    where: { id },
  })

  return role
    ? { code: 200, role }
    : { code: 404, message: 'Rol no encontrado' }
}

export { getAll, getAllValids, getById }
