import { WorkExperience } from '../../lib/conn.js'

const remove = async (id) => {
  const workExperience = await WorkExperience.findOne({
    where: {
      id,
    },
  })
  if (!workExperience) {
    return { code: 404, message: 'Experiencia laboral no encontrada' }
  }
  await workExperience.destroy()
  return { code: 200, message: 'Experiencia laboral eliminada con éxito' }
}

export default remove
