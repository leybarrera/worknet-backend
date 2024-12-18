import remove from './delete.controller.js'
import {
  getAll,
  getById,
  getByEmail,
  getOnlyValids,
  getOnlyActives,
  getOnlyInactives,
  getOtherUsers,
  getRecommendationsUserLogged,
  getRecommendationsUserNotLogged,
} from './get.controller.js'
import register from './post.controller.js'
import {
  update,
  recoveryUser,
  updateUserInfo,
  updateUserResume,
  updateUserEducation,
  updateUserWorkExperience,
  updateUserSkills,
  updateUserLanguage,
  updateUserReferences,
} from './put.controller.js'

export default {
  remove,
  getAll,
  getById,
  getByEmail,
  getOnlyValids,
  getOnlyActives,
  getOnlyInactives,
  getOtherUsers,
  getRecommendationsUserLogged,
  getRecommendationsUserNotLogged,
  register,
  update,
  recoveryUser,
  updateUserInfo,
  updateUserResume,
  updateUserEducation,
  updateUserWorkExperience,
  updateUserSkills,
  updateUserLanguage,
  updateUserReferences,
}
