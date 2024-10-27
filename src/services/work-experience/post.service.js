import { WorkExperience } from '../../lib/conn.js'

const register = async (data) => {
  const workExperience = await WorkExperience.create(data)
  return workExperience
    ? {
        code: 201,
        message: 'Experiencia laboral registrada con éxito',
      }
    : {
        code: 400,
        message:
          'No se pudo registrar la experiencia laboral. Por favor, inténtelo más tarde',
      }
}
export default register
