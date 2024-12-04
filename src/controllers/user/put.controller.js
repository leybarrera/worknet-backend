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

const updateProfile = async (req, res) => {
  try {
    const { id } = req.params
    console.log(id)
    const { image, resume } = req.files
    const { education, user_info, experience, skills, language, references } =
      req.body
    // const secure_url_pdf = await cloudinaryHelper.uploadPdf(
    //   'resumes',
    //   resume[0].buffer,
    //   resume[0].originalname
    // )

    if (image) {
      const secure_url_image = await cloudinaryHelper.uploadFile(
        'users',
        image[0].buffer,
        image[0].originalname
      )

      // User
      await User.update(
        {
          ...JSON.parse(user_info),
          profile_picture: secure_url_image,
        },
        {
          where: {
            id,
          },
        }
      )
    }

    if (resume) {
      const secure_url_pdf = await cloudinaryHelper.uploadPdf(
        'resumes',
        resume[0].buffer,
        resume[0].originalname
      )

      const resumeFound = await Resume.findOne({
        where: {
          UserId: id,
        },
      })

      if (!resumeFound) {
        const newResume = await Resume.create({
          file_url: secure_url_pdf,
          UserId: id,
        })
      }
    }

    if (education) {
      const education_parse = JSON.parse(education)
      const educationMap = education_parse.map((edu) => {
        return {
          institution: edu.institution,
          degree_obtained: edu.degree_obtained,
          start_date: edu.start_date,
          end_date: edu.end_date,
          UserId: id,
        }
      })

      await Education.bulkCreate(educationMap)
    }

    if (experience) {
      const experience_parse = JSON.parse(experience)
      const experienceMap = experience_parse.map((exp) => {
        return {
          company: exp.company,
          position: exp.position,
          duration: exp.duration,
          UserId: id,
        }
      })

      await WorkExperience.bulkCreate(experienceMap)
    }

    if (skills) {
      const skills_parse = JSON.parse(skills)
      const skillsMap = skills_parse.map((skill) => {
        return {
          SkillId: skill.SkillId,
          years_of_experience: skill.years_of_experience,
          UserId: id,
        }
      })

      await UserSkill.bulkCreate(skillsMap)
    }

    if (language) {
      const language_parse = JSON.parse(language)
      const languageMap = language_parse.map((lan) => {
        return {
          name: lan.name,
          proficiency: lan.proficiency,
          UserId: id,
        }
      })

      await Language.bulkCreate(languageMap)
    }

    if (references) {
      const references_parse = JSON.parse(references)
      const referencesMap = references_parse.map((ref) => {
        return {
          name: ref.name,
          email: ref.email,
          phone: ref.phone,
          relationship: ref.relationship,
          UserId: id,
        }
      })

      await Reference.bulkCreate(referencesMap)
    }

    return res.status(200).json({
      message: 'Perfil actualizado correctamente',
    })
  } catch (error) {
    return res.status(500).json({
      message: 'Error interno en el servidor. ' + error,
    })
  }
}

export { update, recoveryUser, updateProfile }
