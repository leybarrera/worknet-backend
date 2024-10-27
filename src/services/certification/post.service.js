import { User } from '../../lib/conn.js'

const userExists = async (id) => {
  const user = await User.findOne({
    where: {
      id,
      isActive: true,
      isDeleted: false,
    },
  })
  return user
}
const register = async (data) => {
  const { UserId } = data

  if (!(await userExists(UserId)))
    return { code: 400, message: 'Usuario no encontrado' }

  const certification = await Certification.create(data)
  return certification
    ? { code: 201, message: 'Certificación creada con éxito' }
    : {
        code: 400,
        message:
          'No se pudo crear la certificación. Por favor, inténtelo más tarde',
      }
}
export default register
