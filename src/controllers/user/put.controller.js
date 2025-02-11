import { cloudinaryHelper } from '../../helpers/index.helpers.js'
import {
  Education,
  Language,
  Reference,
  Resume,
  Skill,
  User,
  UserSkill,
  WorkExperience,
} from '../../lib/conn.js'
import { userService } from '../../services/index.services.js'

const updateWihoutImage = async (req, res) => {
  try {
    const data = req.body
    const { id, ...newData } = data
    const { code, message } = await userService.update(id, newData)
    return res.status(code).json({ message })
  } catch (error) {
    return res
      .status(500)
      .json({ message: `Error interno del servidor. ${error}` })
  }
}

const updateWithImage = async (req, res) => {
  try {
    const file = req.file
    const data = req.body

    const secure_url = await cloudinaryHelper.uploadFile(
      'users',
      file.buffer,
      `profile_${file.originalname}`
    )
    const { id, ...userData } = data
    const newUserData = {
      ...userData,
      profile_picture: secure_url,
    }
    const { code, message } = await userService.update(id, newUserData)
    return res.status(code).json({ message })
  } catch (error) {
    console.log(error)
    return res
      .status(500)
      .json({ message: `Error interno del servidor. ${error}` })
  }
}

const update = async (req, res) => {
  try {
    const { id } = req.params
    const data = req.body
    const { code, message } = await userService.update(id, data)
    return res.status(code).json({ message })
  } catch (error) {
    return res
      .status(500)
      .json({ message: `Error interno del servidor. ${error}` })
  }
}

const recoveryUser = async (req, res) => {
  try {
    const { id } = req.params
    const { code, message } = await userService.recoveryUser(id)
    return res.status(code).json({ message })
  } catch (error) {
    return res
      .status(500)
      .json({ message: `Error interno del servidor. ${error}` })
  }
}

const updateUserInfo = async (req, res) => {
  try {
    const { id } = req.params
    console.log(id)
    const { image } = req.files
    const { user_info } = req.body

    if (image) {
      const secure_url = await cloudinaryHelper.uploadFile(
        'users',
        image[0].buffer,
        image[0].originalname
      )
      user_info.profile_picture = secure_url
    }
    const { code, message } = await userService.updateInfoUser(id, {
      ...JSON.parse(user_info),
    })
    return res.status(code).json({ message })
  } catch (error) {
    console.log(error.message)
    return res.status(500).json({
      message: 'Error interno en el servidor. Intente más tarde.',
    })
  }
}

const updateUserResume = async (req, res) => {
  try {
    const { id } = req.params
    const { resume } = req.files
    const secure_url = await cloudinaryHelper.uploadPdf(
      'resumes',
      resume[0].buffer,
      resume[0].originalname
    )
    const { code, message } = await userService.updateUserResume(secure_url, id)
    return res.status(code).json({ message })
  } catch (error) {
    return res.status(500).json({
      message: 'Error interno en el servidor. Intente más tarde.',
    })
  }
}

const updateUserEducation = async (req, res) => {
  try {
    const { id } = req.params
    const education = req.body
    const educationMap = education.map((edu) => {
      return {
        ...edu,
        UserId: id,
      }
    })
    const { code, message } = await userService.updateUserEducation(
      id,
      educationMap
    )
    return res.status(code).json({ message })
  } catch (error) {
    console.log(error.message)
    return res.status(500).json({
      message: 'Error interno en el servidor. Intente más tarde.',
    })
  }
}

const updateUserWorkExperience = async (req, res) => {
  try {
    const { id } = req.params
    const experiences = req.body
    const experienceMap = experiences.map((exp) => {
      return {
        ...exp,
        UserId: id,
      }
    })
    const { code, message } = await userService.updateUserWorkExperience(
      id,
      experienceMap
    )
    return res.status(code).json({ message })
  } catch (error) {
    return res.status(500).json({
      message: 'Error interno en el servidor. Intente más tarde.',
    })
  }
}

const updateUserSkills = async (req, res) => {
  try {
    const { id } = req.params
    const skills = req.body
    const skillsMap = skills.map((skill) => {
      return {
        ...skill,
        UserId: id,
      }
    })
    const { code, message } = await userService.updateUserSkills(id, skillsMap)
    return res.status(code).json({ message })
  } catch (error) {
    return res.status(500).json({
      message: 'Error interno en el servidor. Intente más tarde.',
    })
  }
}

const updateUserLanguage = async (req, res) => {
  try {
    const { id } = req.params
    const languages = req.body
    const languageMap = languages.map((lang) => {
      return {
        ...lang,
        UserId: id,
      }
    })
    const { code, message } = await userService.updateUserLanguages(
      id,
      languageMap
    )
    return res.status(code).json({ message })
  } catch (error) {
    return res.status(500).json({
      message: 'Error interno en el servidor. Intente más tarde.',
    })
  }
}

const updateUserReferences = async (req, res) => {
  try {
    const { id } = req.params
    const references = req.body
    const referencesMap = references.map((ref) => {
      return {
        ...ref,
        UserId: id,
      }
    })
    const { code, message } = await userService.updateUserReferences(
      id,
      referencesMap
    )
    return res.status(code).json({ message })
  } catch (error) {
    console.log(error.message)
    return res.status(500).json({
      message: 'Error interno en el servidor. Intente más tarde.',
    })
  }
}

export {
  update,
  recoveryUser,
  updateUserInfo,
  updateUserResume,
  updateWihoutImage,
  updateUserEducation,
  updateUserWorkExperience,
  updateUserSkills,
  updateWithImage,
  updateUserLanguage,
  updateUserReferences,
}
