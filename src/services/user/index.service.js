import register from './post.service.js'
import {
  update,
  recoveryUser,
  updateInfoUser,
  updateUserEducation,
  updateUserResume,
  updateUserWorkExperience,
  updateUserSkills,
  updateUserLanguages,
  updateUserReferences,
} from './update.service.js'
import remove from './delete.service.js'
import {
  getAll,
  getById,
  getOnlyActives,
  getOnlyInactives,
  getRecommendationsUserLogged,
  getRecommendationsUserNotLogged,
  getOnlyValids,
  getByEmail,
  getOtherUsers,
} from './get.service.js'

export default {
  register,
  update,
  remove,
  recoveryUser,
  getAll,
  getById,
  getOnlyActives,
  getOnlyInactives,
  getOnlyValids,
  getRecommendationsUserLogged,
  getRecommendationsUserNotLogged,
  getByEmail,
  getOtherUsers,
  updateInfoUser,
  updateUserEducation,
  updateUserResume,
  updateUserWorkExperience,
  updateUserSkills,
  updateUserLanguages,
  updateUserReferences,
}
