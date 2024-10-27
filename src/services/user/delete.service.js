import { User } from '../../lib/conn.js'

const remove = async (id) => {
  const user = await User.findOne({
    where: {
      id,
      isDeleted: false,
    },
  })

  if (!user) return { code: 404, message: 'Usuario no encontrado' }

  user.isDeleted = true
  await user.save()
  return { code: 200, message: 'Usuario eliminado con éxito' }
}

export default remove
