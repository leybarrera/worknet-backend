import { WorkExperience } from '../../lib/conn.js'

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
const getByUser = async (id) => {
  if (!(await userExists(id)))
    return { code: 404, message: 'Usuario no encontrado' }
  const workExperiences = await WorkExperience.findAll({
    where: {
      UserId: id,
    },
    include: [User],
  })

  return { code: 200, workExperiences }
}

export { getByUser }
