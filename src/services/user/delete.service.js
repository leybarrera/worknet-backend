import { User } from '../../lib/conn.js'

const deleteUser = async (id) => {
  const user = await User.findOne({
    where: {
      id,
      isActive: true,
      isDeleted: false,
    },
  })

  if (!user) return { code: 400, message: 'Usuario no encontrado' }
  user.isDeleted = true
  await user.save()
  return { code: 200, message: 'Usuario eliminado exitosamente' }
}

export default deleteUser
