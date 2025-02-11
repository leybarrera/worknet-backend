import { Op } from 'sequelize'
import {
  Education,
  Language,
  Reference,
  Resume,
  User,
  UserSkill,
  WorkExperience,
} from '../../lib/conn.js'
import { bcryptUtil } from '../../utils/index.utils.js'

const existOtherUser = async (id, email) => {
  const user = await User.findOne({
    where: {
      email: {
        [Op.iLike]: email,
      },
      id: {
        [Op.not]: id,
      },
    },
  })
  return user
}
const update = async (id, data) => {
  const user = await User.findOne({
    where: {
      id,
      isDeleted: false,
    },
  })

  if (!user) return { code: 404, message: 'Usuario no encontrado' }

  const { email, password } = data
  if (email && (await existOtherUser(id, email)))
    return { code: 400, message: 'Ya existe otro usuario con este email' }

  if (password) data.password = await bcryptUtil.hashPassword(password)

  const [rows] = await User.update(data, {
    where: {
      id,
    },
  })
  return rows > 0
    ? { code: 200, message: 'Usuario actualizado con éxito' }
    : {
        code: 400,
        message:
          'No se pudo actualizar el usuario. Por favor, inténtelo más tarde',
      }
}

const recoveryUser = async (id) => {
  const user = await User.findOne({
    where: {
      id,
      isDeleted: true,
    },
  })
  if (!user) return { code: 404, message: 'Usuario no encontrado' }

  user.isDeleted = false
  await user.save()
  return { code: 200, message: 'Usuario recuperado con éxito' }
}

const updateInfoUser = async (id, data) => {
  const user = await User.findOne({
    where: {
      id,
    },
  })

  console.log(user)

  if (!user) return { code: 404, message: 'Usuario no encontrado' }

  const [rows] = await User.update(data, {
    where: {
      id,
      isDeleted: false,
    },
  })

  return rows > 0
    ? { code: 200, message: 'Información actualizada con éxito' }
    : {
        code: 400,
        message:
          'No se pudo actualizar el perfil. Por favor, inténtelo más tarde',
      }
}

const updateUserResume = async (file_url, id) => {
  const user = await User.findOne({
    where: {
      id,
      isDeleted: false,
    },
  })

  if (!user) return { code: 404, message: 'Usuario no encontrado' }

  const resumeUser = await Resume.findOne({
    where: {
      UserId: id,
    },
  })

  if (resumeUser) {
    resumeUser.file_url = file_url
    resumeUser.save()
    return { code: 200, message: 'El curriculum se actualizó con éxito' }
  }

  const resume = await Resume.create({
    file_url,
    UserId: id,
  })

  return resume
    ? { code: 200, message: 'El curriculum se agregó con éxito' }
    : { code: 400, message: 'No se pudo actualizar el curriculum' }
}

const updateUserEducation = async (id, data) => {
  const user = await User.findOne({
    where: {
      id,
      isDeleted: false,
    },
  })

  if (!user) return { code: 404, message: 'Usuario no encontrado' }

  const educationUser = await Education.findAll({
    where: {
      UserId: id,
    },
  })

  if (educationUser.length > 0) {
    await Education.destroy({
      where: {
        UserId: id,
      },
    })
  }
  const educations = await Education.bulkCreate(data)

  return educations.length > 0
    ? { code: 200, message: 'Educacación actualizada con éxito' }
    : { code: 400, message: 'No se pudo actualizar la educación del usuario' }
}

const updateUserWorkExperience = async (id, data) => {
  const user = await User.findOne({
    where: {
      id,
      isDeleted: false,
    },
  })
  if (!user) return { code: 404, message: 'Usuario no encontrado' }

  const workExperienceUser = await WorkExperience.findAll({
    where: {
      UserId: id,
    },
  })

  if (workExperienceUser.length > 0) {
    await WorkExperience.destroy({
      where: {
        UserId: id,
      },
    })
  }
  const workExperiences = await WorkExperience.bulkCreate(data)

  return workExperiences.length > 0
    ? { code: 200, message: 'Experiencia laboral actualizada con éxito' }
    : {
        code: 400,
        message: 'No se pudo actualizar la experiencia laboral.',
      }
}

const updateUserSkills = async (id, data) => {
  const user = await User.findOne({
    where: {
      id,
      isDeleted: false,
    },
  })
  if (!user) return { code: 404, message: 'Usuario no encontrado' }

  const userSkills = await UserSkill.findAll({
    where: {
      UserId: id,
    },
  })

  if (userSkills.length > 0) {
    await UserSkill.destroy({
      where: {
        UserId: id,
      },
    })
  }
  const userSkill = await UserSkill.bulkCreate(data)
  return userSkill.length > 0
    ? { code: 200, message: 'Habilidades actualizadas con éxito' }
    : {
        code: 400,
        message: 'No se pudo actualizar las habilidades del usuario',
      }
}

const updateUserLanguages = async (id, data) => {
  const user = await User.findOne({
    where: {
      id,
      isDeleted: false,
    },
  })

  if (!user) return { code: 404, message: 'Usuario no encontrado' }

  const userLanguages = await Language.findAll({
    where: {
      UserId: id,
    },
  })

  if (userLanguages.length > 0) {
    await Language.destroy({
      where: {
        UserId: id,
      },
    })
  }
  const userLanguage = await Language.bulkCreate(data)
  return userLanguage.length > 0
    ? { code: 200, message: 'Idiomas actualizados con éxito' }
    : {
        code: 400,
        message: 'No se pudo actualizar los idiomas del usuario',
      }
}

const updateUserReferences = async (id, data) => {
  const user = await User.findOne({
    where: {
      id,
      isDeleted: false,
    },
  })

  if (!user) return { code: 404, message: 'Usuario no encontrado' }

  const userReferences = await Reference.findAll({
    where: {
      UserId: id,
    },
  })

  if (userReferences.length > 0) {
    await Reference.destroy({
      where: {
        UserId: id,
      },
    })
  }
  const userReference = await Reference.bulkCreate(data)
  return userReference.length > 0
    ? { code: 200, message: 'Referencias actualizadas con éxito' }
    : {
        code: 400,
        message: 'No se pudo actualizar las referencias del usuario',
      }
}

export {
  update,
  recoveryUser,
  updateInfoUser,
  updateUserResume,
  updateUserEducation,
  updateUserWorkExperience,
  updateUserSkills,
  updateUserLanguages,
  updateUserReferences,
}
