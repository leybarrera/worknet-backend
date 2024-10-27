import { WorkExperience } from '../../lib/conn.js'

const update = async (id, data) => {
  const workExperience = await WorkExperience.findOne({
    where: {
      id,
    },
  })

  if (!workExperience) {
    return { code: 404, message: 'Experiencia laboral no encontrada' }
  }
  await workExperience.update(data)
  return { code: 200, workExperience }
}

export default update
