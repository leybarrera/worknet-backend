import { Resume } from '../../lib/conn.js'

const resumeExistsByUser = async (UserId) => {
  const resume = await Resume.findOne({
    where: {
      UserId,
    },
  })
  return resume
}
const register = async (data) => {
  const { UserId } = data

  if (await resumeExistsByUser(UserId))
    return { code: 400, message: 'Ya existe un currículum agregado' }

  const resume = await Resume.create(data)

  return resume
    ? { code: 201, message: 'Currículum agregado con éxito' }
    : {
        code: 400,
        message:
          'No se pudo agregar el currículum. Por favor, inténtelo más tarde',
      }
}
export default register
