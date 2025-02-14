import { Op } from 'sequelize'
import {
  Connection,
  Education,
  JobApplication,
  Language,
  Reference,
  Resume,
  Skill,
  User,
  UserSkill,
  WorkExperience,
} from '../../lib/conn.js'

const getAll = async () => {
  const users = await User.findAll({
    where: {
      role: {
        [Op.ne]: 'Administrador', // Excluir los usuarios con rol 'Administrador'
      },
      isDeleted: false,
    },
    include: [
      {
        model: Resume, // Incluye la tabla 'Resume'
        required: false, // False si quieres incluir usuarios sin resumen
      },
    ],
  })
  return { code: 200, users }
}
const getOnlyInactives = async () => {
  const users = await User.findAll({
    where: { isActive: false, isDeleted: false },
  })
  return { code: 200, users }
}

const getOnlyActives = async () => {
  const users = await User.findAll({
    where: { isActive: true, isDeleted: false },
  })
  return { code: 200, users }
}

const getOnlyValids = async () => {
  const users = await User.findAll({
    where: { isActive: true, isDeleted: false },
  })
  return { code: 200, users }
}

const getById = async (id) => {
  const user = await User.findOne({
    where: {
      id,
      isActive: true,
      isDeleted: false,
    },

    include: [
      Resume,
      Skill,
      WorkExperience,
      Education,
      JobApplication,
      Language,
      Reference,
    ],
  })
  return user
    ? { code: 200, user }
    : { code: 404, message: 'Usuario no encontrado' }
}

const getByEmail = async (email) => {
  const user = await User.findOne({
    where: {
      email,
      isActive: true,
      isDeleted: false,
    },
  })
  return user
    ? { code: 200, user }
    : { code: 404, message: 'Usuario no encontrado' }
}

const getRecommendationsUserLogged = async (id) => {
  const users = await User.findAll({
    where: {
      isActive: true,
      isDeleted: false,
      [Op.and]: [
        { id: { [Op.ne]: id } },
        { role: { [Op.ne]: 'Administrador' } },
      ],
    },
  })

  return { code: 200, users }
}

const getRecommendationsUserNotLogged = async (id) => {
  const users = await User.findAll({
    where: {
      isActive: true,
      isDeleted: false,
      role: { [Op.ne]: 'Administrador' },
    },
  })

  return { code: 200, users }
}

const getOtherUsers = async (id) => {
  const users = await User.findAll({
    where: {
      isActive: true,
      isDeleted: false,
      role: { [Op.ne]: 'Administrador' },
      id: { [Op.ne]: id },
    },
  })

  return { code: 200, users }
}

export {
  getAll,
  getById,
  getOnlyActives,
  getOnlyInactives,
  getOnlyValids,
  getByEmail,
  getRecommendationsUserLogged,
  getRecommendationsUserNotLogged,
  getOtherUsers,
}
