import { Role } from '../../lib/conn.js'

const remove = async (id) => {
  const role = await Role.findOne({
    where: {
      id,
      isDeleted: false,
    },
  })

  if (!role) return { code: 404, message: 'Rol no encontrado' }

  role.isDeleted = true
  await role.save()
  return { code: 200, message: 'Rol eliminado con éxito' }
}

export default remove
